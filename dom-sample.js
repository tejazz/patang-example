const axios = require('axios');
const { domEvaluator } = require('patang');

// Flipkart
let exampleFlpktUrl = 'https://www.flipkart.com/boat-stone-grenade-5-w-portable-bluetooth-speaker/p/itm0f38c2f530da5?pid=ACCFDBFR9ZCZTDGJ&lid=LSTACCFDBFR9ZCZTDGJUKDA7E&marketplace=FLIPKART&srno=b_1_1&otracker=hp_omu_Top%2BOffers_5_3.dealCard.OMU_MG06BUMHI8DW_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Top%2BOffers_NA_dealCard_cc_5_NA_view-all_3&fm=neo%2Fmerchandising&iid=78c6c4aa-ba59-437b-b973-e57a583ee1c7.ACCFDBFR9ZCZTDGJ.SEARCH&ppt=browse&ppn=browse&ssid=ca4ygt9n0g0000001608474631861';

axios.get(exampleFlpktUrl)
    .then((res) => {
        console.log('Flipkart Product Details')
        // printing the extracted details as an example
        // use the return value as you see apt for your use-case 
        console.log(domEvaluator.evaluateProductDetails(res.data, 'flipkart'));
    });