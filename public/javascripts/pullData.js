window.onload = function () {
  axios.get('/fetch', {
  })
  .then(function (response) {
    console.log(response);
    var avgMood = document.getElementById('avgMood')
    var result = 0
    for(i=0;i<response.data.length;i++) {
        result += parseInt(response.data[i].moodNumber)
    }
    result = result/response.data.length
    avgMood.textContent = 'Your average mood is '+result+'.'
    for(i=0;i<response.data.length;i++) {
        //avg mood calc, no of times check in
        var nbrOfCheckIns = document.getElementById('nbrOfCheckIns')
        nbrOfCheckIns.textContent = 'You have checked in your mood '+response.data.length+' times to date.'
        //populate table with data
        var tableRow = document.createElement('tr')
        var tableData1 = document.createElement('td')
        var tableData2 = document.createElement('td')
        var tableData3 = document.createElement('td')
        var tableData4 = document.createElement('td')
        tableData1.textContent = response.data[i].timestamp
        tableData2.textContent = response.data[i].moodNumber
        tableData3.textContent = response.data[i].emotionalState
        tableData4.textContent = response.data[i].comment
        tableRow.appendChild(tableData1)
        tableRow.appendChild(tableData2)
        tableRow.appendChild(tableData3)
        tableRow.appendChild(tableData4)
        var bdy = document.getElementById('tablebody')
        bdy.appendChild(tableRow)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}