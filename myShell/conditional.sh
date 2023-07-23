#!/bin/bash

age=18
if [ $age -gt 18 ]; then
    echo "You are allowed to Caste your Vote"
elif [ $age -lt 17 ]; then
    echo "You are Minor, you are not allowed to Vote"
else 
    echo "You are just reached $age, Register your voter Id"
fi

