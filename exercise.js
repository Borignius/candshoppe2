
function getItemById(item, id){
  var matchedObj = item.filter(function(item) {
    return item.id === id
  })
  return matchedObj[0]
}


function buildTransactions(sales, items) {
    var butt = sales.map(function(sale){
       var butts = getItemById(items, sale.itemId)
      return butts
    })

    var totalTranX = []

      var tranX = butt.reduce(function(thisSale, currentValue, i){
        thisSale.itemId = currentValue.id
        thisSale.description = currentValue.description
        thisSale.price = currentValue.price
        thisSale.quantity = sales[i].quantity
         totalTranX.push(thisSale)
         return {}
        },{})
    return totalTranX
}

function getTransactionsByItemDescription(transactions, description){
   var matchedItem = transactions.filter(function(transaction) {
    return transaction.description === description
  })
  return matchedItem
}



module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
