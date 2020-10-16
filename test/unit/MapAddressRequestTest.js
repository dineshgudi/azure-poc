let chai = require('chai');
let spies = require('chai-spies');
const httpFunction = require('../../MapAccount/index');
const context = require('../testing/defaultContext')

const {assert} = require('chai');
const {expect} = require('chai');

describe.only('Account', () => {
    before(function (done) {
        chai.use(spies);
        done();
    });

    beforeEach((done) => {
        done();
    });
   let accountAddressRequest = `{
   "body":{
   "ADRMAS03":{
    "IDOC":{
       "EDI_DC40":{
          "TABNAM":"EDI_DC40",
          "MANDT":510,
          "DOCNUM":"0000000851698889",
          "DOCREL":750,
          "STATUS":"03",
          "DIRECT":1,
          "OUTMOD":2,
          "IDOCTYP":"ADRMAS03",
          "MESTYP":"ADRMAS",
          "SNDPOR":"SAPGES",
          "SNDPRT":"LS",
          "SNDPRN":"GESCLNT510",
          "RCVPOR":"0M1SV8I_02",
          "RCVPRT":"LS",
          "RCVPRN":"0M1SV8I",
          "CREDAT":20200717,
          "CRETIM":"091718",
          "SERIAL":20200717091717
       },
       "E1ADRMAS":{
          "OBJ_TYPE":"KNA1",
          "OBJ_ID":"0000111045",
          "CONTEXT":"0001",
          "IV_CHECK_ADDRESS":"X",
          "IV_TIME_DEPENDENT_COMM_DATA":"X",
          "E1BPAD1VL":{
             "FROM_DATE":"00010101",
             "TO_DATE":99991231,
             "NAME":"NORTHROP GRUMMAN CORPORATION",
             "NAME_2":"A Name 2 Entry",
             "C_O_NAME":"A care of line entry",
             "CITY":"IRVING",
             "DISTRICT":"DALLAS",
             "POSTL_COD1":75063,
             "TRANSPZONE":"TX750",
             "STREET":"FREEPORT PARKWAY",
             "HOUSE_NO":8710,
             "STR_SUPPL1":"SUITE 200",
             "STR_SUPPL3":"A street 4 entry",
             "COUNTRY":"US",
             "COUNTRYISO":"US",
             "LANGU":"E",
             "LANGU_ISO":"EN",
             "REGION":"TX",
             "SORT1":"NORTHROPGR",
             "TIME_ZONE":"CST",
             "TAXJURCODE":"TX7506300",
             "E1BPAD1VL1":{
                "ADDR_GROUP":"BP"
             }
          },
          "E1BPADTEL":{
             "COUNTRY":"US",
             "COUNTRYISO":"US",
             "STD_NO":"X",
             "TELEPHONE":"214-596-6400",
             "TEL_NO":"+12145966400",
             "CALLER_NO":2145966400,
             "R_3_USER":1,
             "HOME_FLAG":"X",
             "CONSNUMBER":"001"
          },
          "E1BPADFAX":{
             "COUNTRY":"US",
             "COUNTRYISO":"US",
             "STD_NO":"X",
             "FAX":"904-829-5554",
             "FAX_NO":"+19048295554",
             "SENDER_NO":9048295554,
             "HOME_FLAG":"X",
             "CONSNUMBER":"001"
          },
          "E1BPADUSE":[
             {
                "COMM_TYPE":"TEL",
                "CONSNUMBER":"001",
                "COMM_USAGE":"AD_DEFAULT",
                "DEF_USAGE":"X"
             },
             {
                "COMM_TYPE":"TEL",
                "CONSNUMBER":"001",
                "COMM_USAGE":"AD_HOME",
                "DEF_USAGE":"X"
             },
             {
                "COMM_TYPE":"TEL",
                "CONSNUMBER":"001",
                "COMM_USAGE":"AD_NMBDEFA",
                "DEF_USAGE":"X"
             },
             {
                "COMM_TYPE":"FAX",
                "CONSNUMBER":"001",
                "COMM_USAGE":"AD_DEFAULT",
                "DEF_USAGE":"X"
             },
             {
                "COMM_TYPE":"FAX",
                "CONSNUMBER":"001",
                "COMM_USAGE":"AD_HOME",
                "DEF_USAGE":"X"
             }
          ]
       },
       "EDI_DS40":[
          {
             "MANDT":510,
             "DOCNUM":"0000000851698889",
             "LOGDAT":20200717,
             "LOGTIM":"091718",
             "STATUS":"01",
             "STAMNO":"000",
             "UNAME":"E41309",
             "SEGNUM":"000000"
          },
          {
             "MANDT":510,
             "DOCNUM":"0000000851698889",
             "LOGDAT":20200717,
             "LOGTIM":"091718",
             "STATUS":30,
             "STAMQU":"SAP",
             "STAMID":"B1",
             "STAMNO":"006",
             "STATYP":"S",
             "STAPA1":"Receiver exists",
             "STAPA2":"No filters",
             "STAPA3":"No conversion",
             "STAPA4":"No version change",
             "UNAME":"E41309",
             "SEGNUM":"000000"
          },
          {
             "MANDT":510,
             "DOCNUM":"0000000851698889",
             "LOGDAT":20200717,
             "LOGTIM":"091719",
             "STATUS":"03",
             "STAMQU":"SAP",
             "STAMID":"EA",
             "STAMNO":392,
             "STATYP":"I",
             "STAPA1":"0000000851698889",
             "STATXT":"IDoc sent with SOAP HTTP",
             "UNAME":"E41309",
             "REPID":"LEDI7F10",
             "SEGNUM":"000000"
          }
       ]
    }
 }}
}`;

const request = JSON.parse(accountAddressRequest);

    describe('MapAccountAddressRequestHelper.js', () => {
        it('#accountAddressRequestMapper should generate the Account Address JSON accurately', async() => {
            let convertedRequest = httpFunction(context, request);
            // convertedRequest = JSON.parse(convertedRequest);
            
            assert.isNotNull(convertedRequest);
            assert.equal(convertedRequest.BillingPostalCode, '75063');   
                
        });
    });
});
//     describe('MapAccountRequestHelper.js', () => {
//         it('#accountRequestMapper should generate json with name', async() => {
//             let convertedRequest = accountRequestMapper(JSON.parse(accountRequest),'107642');
//             assert.isNotNull(convertedRequest);
//             assert.equal(convertedRequest.Name, JSON.parse(accountRequest).DEBMAS_C4CEXT.IDOC.E1KNA1M.NAME1);
//             assert.equal(convertedRequest.RecordType.Name, 'SEE Account');
//             assert.equal(convertedRequest.Type, 'Customer');
//         });
//     });
//     describe('MapAccountRequestHelper.js', () => {
//       it('#salesAreaRequestMapper should handle the case with one sales area', async() => {
//           let convertedRequest = salesAreaRequestMapper(JSON.parse(accountRequest2),'107642','/services/data/v48.0/sobjects/Account_Sales_Area__c/External_ID__c/');
//           convertedRequest = JSON.parse(convertedRequest);
//           assert.isNotNull(convertedRequest);
//           expect(convertedRequest.compositeRequest).to.be.an('array').with.lengthOf(1); 
//           assert.equal(convertedRequest.compositeRequest[0].referenceId, '107642-1030-01-02')
//       });
//   });
// });