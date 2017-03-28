function count(num){
    var daysUntilMyBirthday = 60;
    while (daysUntilMyBirthday > 0){
        console.log("I have " + daysUntilMyBirthday + " days until my Birthday... =-(");
        daysUntilMyBirthday = daysUntilMyBirthday - 1;
    }
    if (daysUntilMyBirthday == 0){
        console.log("woohoo, Happy BirthDay!")
    }

}
count(15);