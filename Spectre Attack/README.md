# ISEC3004_Assign1_Gr16

*****************
# Spectre Attack
*****************

# Working Environment 
Linux- Enviroment

# Using Visual Studio
Create new empty project and add Source.c then click on Build.

# To Complie the file 
gcc -std=c99 Spectre.c -o sa.out

# To Run
./sa.out

# Read From address
{address} {length} with params:

address - pointer address of victim char *
length - length of char * 

# Result is
We're putting text Putting 'This is the Secret Withdrawn' in memory, in memory and then we're trying to read it using exploit. If system is vulnerable, you'll see same text in output, read from memory.


# this is the hardware Bug,So we dont have software patchs we talked about in the presentation.
