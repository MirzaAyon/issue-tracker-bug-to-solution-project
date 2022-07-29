//reload marla local storage theke data ene dekhache
//mane data take thik thak moto fetch korte partese
//application-local stroage - niche click - id,descripttion,severity,assign to,status shob e ache local e
// [{"id":"27950100","description":"ayon","severity":"Medium","assignedTo":"hello","status":"Open"}]
//local storage delete kore dilam ebar reload dile r show hbe na
//app take reload marlei ba run korlei ekta error diche 43 no line e
// TypeError: Cannot read properties of null (reading 'length')
//43 no line e ekta console dilam
// issues gula null hochee
//const issues = JSON.parse(localStorage.getItem('issues'));
//local storage e ja thakbe shetake get korbo
//but local storage to clean kore dsi
//website reload e error dichche
//tai kono kichu likhe add korle r error dbe na
//karon tokhn local storage theke maan get krte parbe
//jeno kono kichu likha na thakle and storage e kichu na thkaleo reload marle error na dey tai 44 n line e issue er pore conditional chaining(?) diye dilam


//kichu likhar por  dile close hoche na
//ei error dichche
//Uncaught ReferenceError: setStatusClosed is not defined
//tai ei func ta js file e khujhbo
//con+f
//search diye dekhlam html e ektai ache and ei name kno func e nai
//ejonno func gula khuje ber korar try krbo je relatable ki func ache
//func er naam closeIssue
//ekhn27 no line e new error dichche
//ncaught TypeError: Cannot set properties of undefined (setting 'status')
//27 no line e status ta current issue er upr kaj korar try kortese
//currentIssue somehow undefined
//tai current issue te console.log korle undefined ashtese
//kno karone she find korte partese na
//find ta kaj krtese issues er upore
//tai issues ke console log krlam
//id ta thik moto ashtese kina sheta check kore dekhbo
//25 no line e id ke console.log korlam
//close e click krle id ta show hoche
//type of id dibo
//number ashbe
//type of id ta number ashbe but object ba json er vitore je id ta ache sheta string e dewa ache
//tai === diye type shoho read kore feltese
//tai eke == dibo
// const currentIssue = issues.find(issue => issue.id == id); dibo
//or
// const currentIssue = issues.find(issue => Number(issue.id) === id); dibo
//or
// const currentIssue = issues.find(issue => issue.id === id.toString()); dibo
//or
// const currentIssue = issues.find(issue => +issue.id === id); emneo dewa jae but etar readability kom
//ekhn close e chaple closed show hbe
//delete e click krle
//issue is not defined showing  - error line 39
//39 no line e func create na korei issue.id dewa chilo
//array method er modhe je func return korlam etake bole callback func
//ekhn error dichche na
//but delete e click korle local storage theke clean kortese na
//id and remaining issue ke console krlam
//same problem json e ache string e korte hbe num e convert
//ekhn dekha jachee local sto theke delete hoche but ui theke delete hoche na
//abr refresh korar por ui theke delete hochche
//console eo kono error nai
//delete issues theke fetch issues ke call korlam
//'ekhn ui theke delete hochche
//joto bar delete e click korbo
//data ta new kore fetch hbe
//tai delete er modhe fetch ke call krsi
//console e kno error nai
//application e and ui teo kichu nai