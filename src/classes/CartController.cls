/**
 * @author Roman Bukhtiarov
 * @date 2020
 * @description Class with methods to make SQL queries for cart
 */
public class CartController {
	/**
	 * @description Get ID of products which was stored in Sessions Cache, then get Product_c__c list from DB
	 * @return list of Product_c__c objects
	 */
	@AuraEnabled
	public static List <Product_c__c> getProductsInCart() {
		List <Product_c__c> sobjectList;
		try {
			if (Cache.Session.contains('productIDList')) {
				List<Integer> productIDList = (List<Integer>)Cache.Session.get('productIDList');
				sobjectList = new List<Product_c__c>();
				for(Integer id: productIDList) {
					String idS = String.valueOf(id);
					Product_c__c product = [SELECT Name, Description__c, Type__c,Family__c,Price__c  FROM Product_c__c WHERE ID__c=:idS ];
					sobjectList.add(product);
				}
			}
			else {
				return null;
			}

		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
	/**
	 * @description Create order and order items from products in a cart
	 * @return result of cart checkout
	 */
	@AuraEnabled
	public static Boolean checkOutACart() {
		try {
			String profileID = UserInfo.getUserId();

			Order__c order = new Order__c(
					AccountId__c = profileID,
					TotalPrice__c = 0,
					TotalProductCount__c = 0
			);
			insert order;
			String orderID = order.Id;
			order = [SELECT ID__c FROM Order__c WHERE Id = :orderID];
			orderID = order.ID__c;


			if (Cache.Session.contains('productIDList')) {
				List<Integer> productIDList = (List<Integer>)Cache.Session.get('productIDList');
				productIDList.sort();
				OrderItem__c orderItem = null;
				for(Integer id: productIDList) {
					String idS = String.valueOf(id);
					if(orderItem != null && orderItem.ProductId__c != id) {
						insert orderItem;
						orderItem = null;
					}
					if(orderItem == null) {
					Product_c__c product = [SELECT Name, Description__c, Type__c, Family__c, Price__c FROM Product_c__c WHERE ID__c=:idS];

					orderItem = new OrderItem__c(
							OrderId__c = Integer.valueOf(orderID),
							Price__c = product.Price__c,
							ProductId__c = id,
							Quantity__c = 1
					);
				}
					else {
						if(orderItem.ProductId__c == id) {
							orderItem.Quantity__c++;
							orderItem.Price__c*= 2;
						}
					}
				}
				if(orderItem != null) {
					insert orderItem; //for last orderItem
				}
			}

        return true;
		}
		catch(DmlException e) {
			System.debug('An unexpected error has occurred: ' + e.getMessage());
			return false;
		}
	}
}