org 100h 

;Q) COMPARE AND PRINT SMALLEST

;TAKING INPUT

MAIN PROC       
    MOV AH,1
    INT 21H
    MOV BL,AL
    INT 21H
    MOV CL,AL
    
    CMP BL,CL
    JG L2
    
    L1:
    MOV AH,2
    MOV DL,032
    INT 21H
    MOV DL,BL
    INT 21H
    JMP
    
    L2:
    MOV AH,2
    MOV DL,032
    INT 21H
    MOV DL,CL
    INT 21H
    JMP
ret




