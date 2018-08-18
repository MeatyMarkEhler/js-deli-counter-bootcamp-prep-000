function takeANumber(line, name){
  if (line === 0) {
    line.unshift(name);
    return `Welcome, ${name}. You are number${line.length} in line.`
  } else {
    line.push(name)
    return `Welcome, ${name}. You are number${line.length} in line.`
  }
}

//`Welcome, Ada. You are number ${line + 1} in line.`

//function nowServing(line) {if line.unshift(); return "now serving: ${name**index position 0**}" ; else; return "There is nobody waiting to be served!"}

//announces the first item and .shift() the remaining line

//function currentLine(line) {return line.each[+1]; `The line is currently: ${line[+1]} else; "The line is currently: empty."
