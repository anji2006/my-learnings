#!/bin/bash

# for variable in item1 item2 item3 ...; do
#     # Code to execute for each item
# done

for temp in "anji" "potti" "love" "you"; do
    echo "this is $temp"
done

# Printing a Table using Shell
a=9
table_con=(1 2 3 4 5 6 7 8 9 10)
for i in "${table_con[@]}"; do #Iterate through an array
    echo "$i X $a = $(($i * $a))"
done

# for loop with command output
for file in $(ls); do
    echo "File: $file"
done


#########------- While Loop
# while [ condition ]; do
#     # Code to execute while the condition is true
# done

a=98
i=1
while [ $i -le 10 ]; do
    echo "$i X $a = $(($a*$i))"
    i=$(($i+1))
done