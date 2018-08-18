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
    console.log(`Currently serving ${line.slice(0,1)}`);
    
  }
}

//announces the first item and .shift() the remaining line

//function currentLine(line) {return line.forEach[+1]; `The line is currently: ${line.length[+1]} else; "The line is currently: empty."
