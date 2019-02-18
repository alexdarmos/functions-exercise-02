(() => {

let position = 0;
let direction = "positive";

const moveForward = (forward) => {
    
    if (direction === "positive")   {
        position = position + forward;
    }   else    {
        position = position - forward;
    }
};

const moveBackward = (backward) => {
    
    if (direction === "positive")   {
        position = position - backward;
    }   else    {
        position = position + backward;
    }
};

const turnAround = () => {
    if (direction === "positive")   {
        return direction = "negative";
    }   else {
        return direction = "negative";
    }
};

const printLocation = (position) => {
    console.log(position)
}

moveForward(5);
moveBackward(3);
printLocation(position);
turnAround();
moveForward(10);
moveBackward(5);
printLocation(position);
})();