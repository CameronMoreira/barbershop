function handleSubmit() {

   clientName = document.getElementById('clientName').value
   clientPhoneNumber = document.getElementById('clientPhoneNumber').value
   clientEmail = document.getElementById('clientEmail').value
   time = document.getElementById('time').value
   cutType = document.getElementById('cut').value
   startDate = document.getElementById('startDate').value

   console.log("Client Name", clientName)
   console.log('Client Email', clientEmail)
   console.log('Client Phone Number', clientPhoneNumber)

  

   document.getElementById('client-name').innerHTML = `Name: ${clientName}`;
   document.getElementById('client-email').innerHTML = `Email: ${clientEmail}`;
   document.getElementById('client-phone').innerHTML = `Phone: ${clientPhoneNumber}`;
   document.getElementById('cut-type').innerHTML = `Cut-Type: ${cutType}`;
   document.getElementById('date').innerHTML = `Date: ${startDate}`;
}

