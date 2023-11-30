
org 100h

.CODE

MAIN PROC
    ;ASM INSTRUCTION TO MULTIPLY 1 X 7.
    MOV BL,1
    SHL BL,3
    SUB BL,1
    ADD BL,48
    
    MOV AH,2
    MOV DL,BL
    INT 21H

ret


