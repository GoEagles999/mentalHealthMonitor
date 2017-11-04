window.onload = function () {
    var sendButton = document.getElementById('send')
    sendButton.addEventListener('click', function () {
        // get values
        var moodNumber = document.getElementById('moodNumber').value
        var emotionalState = document.getElementById('emotionalState')
        emotionalState = emotionalState.options[emotionalState.selectedIndex].value
        var comment = document.getElementById('comment').value
        // time format
        var options = {  
            weekday: "long", year: "numeric", month: "short",  
            day: "numeric", hour: "2-digit", minute: "2-digit"  
        };
        var timestamp = new Date()
        timestamp = timestamp.toLocaleTimeString("en-us", options)
        // save to backend
        axios.post('/save', {
            timestamp: timestamp,
            moodNumber: moodNumber,
            emotionalState: emotionalState,
            comment: comment 
          })
          .then(function (response) {
            console.log(response.data)
            document.getElementById('moodNumber').value = ''
            document.getElementById('comment').value = ''
            document.getElementById('status').style.display = 'block'
            document.getElementById('status').textContent = response.data
          })
          .catch(function (error) {
            console.log(error);
          });
    })
}