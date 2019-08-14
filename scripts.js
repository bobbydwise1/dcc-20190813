/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Jane Street.

Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with some amount greater than A of that currency.

There are no transaction costs and you can trade fractional quantities.
*/


$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  let input2 = $('#input2').val();
  $('#output-section-1').text(compareStrings(input1,input2));
  })
});
