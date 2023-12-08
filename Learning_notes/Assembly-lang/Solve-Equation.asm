org 100h 

;Q) 5A + 4B - 3C

.DATA
A DB ?
B DB ?
C DB ?

.CODE
    MAIN PROC
    MOV AX,@DATA
    MOV DS,AX

    ;TAKING INPUT IN OUR VAR
    MOV AH,1
    INT 21H
    MOV A,AL
    INT 21H
    MOV B,AL
    INT 21H
    MOV C,AL

    ;ADJUSTING ASCI
    SUB A,48
    SUB B,48
    SUB C,48

    ;AX = 5A     
    MOV BL,A
    MOV AL,5
    MUL BL

    ;CX = 0 + 5A
    MOV CX,0
    ADD CX,AX
    MOV AX,0

    ;AX = 4B
    MOV AL,4
    MOV BL,B
    MUL BL

    ;CX = 5A + 4B
    ADD CX,AX
    MOV AX,0
    
    ;AX = 3C
    MOV AL,3
    MOV BL,C
    MUL BL

    ;CX = 5A + 4B - 3C
    SUB CX,AX
    ADD CX,48

    MOV AH,2
    MOV DL,032;PRINT SPACE
    INT 21H
    MOV DX,CX;PRINT ANS
    INT 21H
ret




