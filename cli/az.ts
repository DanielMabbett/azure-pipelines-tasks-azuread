import azcli from 'azcli-npm';
 
var cli = new azcli()

cli.login("43fd6cf5-e8be-49d0-9d6a-68fe11cb4e59", "serviceId", "serviceSecret");
   
cli.setSubscription('4b89b857-a820-4f5e-b02a-da6d5e180752')

cli.start()
     .arg('ad')
     .arg('user')
     .arg('list')

cli.logout()