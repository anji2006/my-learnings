

function_name() {
     # Code block for the function
     # You can use positional parameters ($1, $2, etc.) to access function arguments
     # Optionally, you can use local variables with 'local' keyword to avoid variable name conflicts
     return $1
}

greet() { #function declaration
    echo "Hellooo, $1"
}
greet "Anjii" #function call
greet "Pottiiii"

add_two_val(){
    local sum=$(($1+$2))
    return $sum
}
a=898
b=90
add_two_val $a $b
res=$? # $? is called varible captures the return value of the funciton, you can use it later in script
echo "the sum of $a and $b is $res"



greet "End Testing"