#!/bin/bash

a=90
b=9
first_name="Anji"
last_name="Anjiii"
if [ $a -eq $b ]; then  # used for numaric comparision equals to 
    echo $(($a + $b))
    echo "Both are equal"
fi 

if [ $(($a -1)) -ne $b ]; then  # Not equal to (numeric comparison).
    echo $(($a -1 + $b))
    echo "Both are not equal"
fi 
if [ $a -lt $b ]; then # -lt: Less than (numeric comparison).
     echo "$a is less than $b "
fi 

if [ $a -le $b ]; then # -le: Less than or equal to (numeric comparison).
    echo "$a is less than or equals to $b "
fi 

if [ $a -gt $b ]; then # -gt: Greater than (numeric comparison).
     echo "$a is Greater than $b "
fi 

if [ $a -ge $b ]; then # -ge: Greater than or equal to (numeric comparison).
    echo "$a is greater than or equals to $b "
fi 

if [ $first_name = $last_name ]; then # =: Equal to (string comparison).
     echo "$first_name is equals to $last_name "
fi 

if [ $first_name != $last_name ]; then # , !=: Not equal to (string comparison).
    echo "$first_name is not same as $last_name "
fi 


# also we have logical operators in Shell

# 1) AND && to combine two conditons 
# 2) OR || to one of two conditions
# 3) NOT ! to negate the condition.