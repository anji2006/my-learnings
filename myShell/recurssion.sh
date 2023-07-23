#!/bin/bash

fact() {
    if [ $1 -eq 1 ]; then
        echo 1
    else
        local a=$(($1 - 1))
        local pre_res=$(($fact "$a"))
        echo $1 * fact "$a"
    fi
}

res=$(fact 8)
echo "$res is factorial of 8"

# in Shell echo is used to print strings, arrays, numbers ......
# in Shell return is used to exit the function and return the integer