#!/bin/bash

# 1) Strings
name="Anji"
message='hii $name, how are you??' #using single quotes ( won't read varibles)
greet="I Love $name, how are you??" #using single quotes 

echo   $message
echo $greet

# 2) Numaric
age=22
count=2
result=$(($age * $count + $age))  #performing arthamatic operations
echo $result

# 3) Arrays (In Some Shells)
my_family=("Anji" "Thanu" "My Friends" 99) # we should use space to separate elements
        #It can store any data-types values 
        # access the element by using indexing

#acceing elements
echo ${my_family[0]}
echo ${my_family[3]}


#add more elements to array
my_family[4]="Pottiiiii"


# 4) Simulated Boolen
fail=0 #false
#Shell scripting does not have native Boolean data types. 
#Instead, it often uses numeric values to simulate Boolean logic, 
#where 0 represents "false," and non-zero values represent "true."


