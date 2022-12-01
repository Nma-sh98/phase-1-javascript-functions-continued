function saturdayFun(action = 'roller-skate') {
    return `This Saturday, I want to ${action}!`;
}
const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork(activity);
function wrapAdjective(defaultA = "*") {
   return function (adjective = "special") {
    return `You are ${defaultA}${adjective}${defaultA}!`;
    }
}
       wrapAdjective ("%") ("a dedicated programer")