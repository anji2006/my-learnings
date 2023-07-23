#!/bin/bash

table() {
    local table_co=(1 2 3 4 5 6 7 8 9 10)
    for i in "${table_co[@]}"; do
        echo "$i X $1 = $(($1 * $i))"
    done
    echo "--------------Table End-----------"
    echo "${table_co[@]}"
}

table 33
table 87
table 89

