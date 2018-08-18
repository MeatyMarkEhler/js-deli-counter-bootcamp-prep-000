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


function currentLine(line) {
  let linelist = []
  if (line.length === 0); {
  return `The line is currently empty.`; 
  } for (i = 0; i < line.length; i++ ); {
    linelist.push( `${i + 1}, ${line} `);
  }
  return `The like is currently: ${linelist.join(', ')}`
}


// linelist.entries(line)
//{return line.forEach[+1]; `The line is currently: ${line.length[+1]} else; "The line is currently: empty."
