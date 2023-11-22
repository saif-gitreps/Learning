
org 100h

.CODE

MAIN PROC
    ;ASM INSTRUCTION TO DIVIDE 8 BY 4.
    MOV BL,8
    SHR BL,2
    ADD BL,48
    
    MOV AH,2
    MOV DL,BL
    INT 21H

ret




