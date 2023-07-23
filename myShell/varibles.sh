#!/bin/bash

# assinging a value to the varible name 
name="Anji"
greet="I Love you, $name" # we should not give any gaps like this (varible_name = "value")
echo $name

#string combination example
echo "$greet, I Misss youuuuuuu"

#numaric varibles example
age=90
echo "he is $age years old"


# Combining variables and literals
fruit="apple"
#same as string combination.
echo "I like $fruit pie."



# Using variables with commands
files=$(ls)
echo "Files in the current directory:-------"

    # $(....) is called command substitution 
    # $(command) It will execute the shell command and assign the values to varible
    # from above ex all the files will store in files varible 
echo $files
    #echo $files: The value of the files variable is subject to word splitting and globbing,
    # and the output may vary if the value contains spaces or special characters.
echo "$files"
    #echo "$files": The entire value of the files variable is treated as a single argument to the echo command,
    # preserving spaces and special characters as part of the output.