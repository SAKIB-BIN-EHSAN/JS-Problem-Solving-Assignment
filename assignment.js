// Function One Starts
function feetToMile(feet) {
    if(feet < 0) {
        return "Feet Value Cannot Be Negative";
    }
    else {
        mile = feet / 5280;
        return mile;
    }
}
// Function One Ends


// Function Two Starts
function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {

    if(numberOfChair < 0) {
        return "Chair Number Cannot be Negative";
    }
    else if(numberOfTable < 0) {
        return "Table Number Cannot be Negative";
    }
    else if(numberOfBed < 0) {
        return "Bed Number Cannot be Negative";
    }
    
    var totalWood = (numberOfChair * 1) + (numberOfTable * 3) + (numberOfBed * 5);
    return totalWood;
}
// Function Two Ends


// Function Three Starts
function brickCalculator(numberOfFloor) {

    var remainFloor = 0;
    var brickNeeded = 0;

    if(numberOfFloor < 0) {
        return "Number of Floor Cannot be Negative";
    }

    else if(numberOfFloor == 0) {
        return "No Building Exists";
    }

    else {
        if (numberOfFloor >= 10) {

            brickNeeded += (10 * 15 * 1000);
            remainFloor = numberOfFloor - 10;

            if(remainFloor >= 10) {
                brickNeeded += (10 * 12 * 1000);
                remainFloor = remainFloor - 10;

                brickNeeded += (remainFloor * 10 * 1000);
            }
            else {
                brickNeeded += (remainFloor * 12 * 1000);
            }
        }
        else {
            brickNeeded = numberOfFloor * 15 * 1000;
        }
    }

    return brickNeeded;
}
// Function Three Ends


// Function Four Starts
function tinyFriend(friendsName) {
    var arrayLength = friendsName.length;

    if(arrayLength == 0) {
        return "Array is Empty";
    }

    var minNameLength = friendsName[0].length;
    var tinyName = friendsName[0];

    for(var i=0;i<arrayLength;i++) {
        var name = friendsName[i];
        
        if(name.length < minNameLength) {
            tinyName = name;
            minNameLength = name.length;
        }
    }
    return tinyName;
}
// Function Four Ends