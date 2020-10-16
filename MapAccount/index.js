module.exports = async function (context, request) {
    context.log('JavaScript HTTP trigger function processed a requestuest.');
    request = request.body;
    var telephone = '';
    var region = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.REGION;
    var obj_id = request.ADRMAS03.IDOC.E1ADRMAS.OBJ_ID;
    var name = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.NAME;
    var name_2 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.NAME_2;
    var name_3 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.NAME_3;
    var name_4 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.NAME_4;
    var c_o_name = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.C_O_NAME;
    var city = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.CITY;
    var city2 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.DISTRICT;
    var street = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.STREET;
    var postl_cod1 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.POSTL_COD1;
    var langu_iso = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.LANGU_ISO;
    if (request.ADRMAS03.IDOC.E1ADRMAS.E1BPADTEL){
        telephone = request.ADRMAS03.IDOC.E1ADRMAS.E1BPADTEL.TELEPHONE;
    }
    var str_suppl1 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.STR_SUPPL1;
    var str_suppl3 = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.STR_SUPPL3;
    var house_no = request.ADRMAS03.IDOC.E1ADRMAS.E1BPAD1VL.HOUSE_NO;
    var requestObj = {};
    requestObj.Name=name;
    name_2=name_2!=null?name_2+'\n':'';
    name_3=name_3!=null?name_3+'\n':'';
    c_o_name=c_o_name!=null?c_o_name+'\n':'';
    str_suppl1=str_suppl1!=null?str_suppl1+'\n':'';
    house_no=house_no!=null?house_no+' ':'';
    street=street!=null?street+'\n':'';
    str_suppl3=str_suppl3!=null?str_suppl3+'\n':'';
    city2=city2!=null?city2:'';
    requestObj.BillingStreet = name_2+name_3+c_o_name+str_suppl1+house_no+street+str_suppl3+city2;
    requestObj.BillingCity = city;
    requestObj.BillingPostalCode = postl_cod1;
    requestObj.BillingCountry = country;
    requestObj.BillingState = region;
    requestObj.Language__c = langu_iso;
    // requestObj.Z_ADDR1_DATA_LANGU = langu_iso;
    // requestObj.Z_ADDR1_DATA_REGION = region;
    requestObj.Phone = telephone;
    
    
    context.res = {
        body: requestObj
    };
}