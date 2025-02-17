function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid"
    }
    let cashOutCharge = money * 1.75 / 100;
    return cashOutCharge;
}


function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }

    let items = ['"', ".", "-", "_", "+", "@"];
    for (const item of items) {
        if (email.startsWith(item)) {
            return false;
        }
    }
    if (!email.endsWith(".com") ||!email.includes("@") ||email.includes(" ") ) {
        return false;
    }
    
    return true;
}




function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid"
    }
    let mango = 0;
    let banana = 0;
    for (let i = 0; i < votes.length; i++){
        let perVote = votes[i];
        if (perVote === "mango") {
            mango++;
        }
        else if (perVote === "banana") {
            banana++;
        }
    }
    if (mango > banana) {
        return "Mango"
    }
    else if (banana > mango) {
        return "Banana"
    }
    else {
        return "Draw"
    }
}



function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object" || Array.isArray(f1) || Array.isArray(f2)) {
        return "Invalid"
    }
    let isFriend = false;
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        isFriend = true;
    }
    return isFriend;
};



function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    for (const check of times) {
        if (typeof check !== "number") {
            return "Invalid";
        }
    }

    let totalSec = 0;
    for (const time of times) {
        totalSec += time;
    }
    let hour = Math.floor(totalSec / 3600);
    let minute = Math.floor((totalSec % 3600) / 60);
    let seconds = Math.floor(totalSec % 60);
    return {hour: hour, minute: minute, second : seconds}
}