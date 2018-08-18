function takeANumber(line, name){
  if (line === 0) {
    line.unshift(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
  } else {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
  }
}


function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

/*
function currentLine(line) {
  const linelist = []
  if (line.length === 0); {
    return `The line is currently empty.`; 
  } for (i = 0; line.length > i; i++ ); {
    linelist.push(`${i + 1}`, `${line[i]}`);
  }
  return `The like is currently: ${linelist.join(', ')}`
}
*/

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } 
  const nosAndNoms = [];
  
  for (i === 0 ; katzDeliLine.length > i; i++){
  
  nosAndNoms.push(`${i+1}. ${katzDeliLine[i]}`);
  }
   return `The line is currently: ${nosAndNoms.join(", ")}` 
  
  
}
