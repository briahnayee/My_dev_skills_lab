console.log($)

//Create an array of skills to store our test data
const testData = ['arrow functions', 'class constructors', 'objects'];

//When the user clicks on the button add skill
$('button').on('click', function() {
    console.log("it worked")
    //get the input from the user and store it in a variable
    let element = $('input').val();
    //make a div element and add the array content to the div
    const $div = $('<div>').text(element).addClass("newEl");
    //append the div to the div #mySkills
    $('#mySkills').append($div);
    //clear the input content
    $('input').val('');
    const $button = $('<button>').text("Remove")
    $div.append($button)

    $button.on('click', function(event){
        console.log(event)
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    })
})        

//pop off the last array element, store it in a variable
    // let element = testData.pop();
    // console.log(element);