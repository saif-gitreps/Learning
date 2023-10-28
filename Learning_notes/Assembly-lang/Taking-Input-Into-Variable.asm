
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt

org 100h

.DATA

X DB ?
Y DB ?
Z DB ?

;Q) Take user input and do the following:
;a) 2A + 2B - C

.CODE

MAIN PROC
    MOV AX,@DATA
    MOV DS,AX
    
    MOV AH,1
    INT 21H
    MOV X,AL
    
    INT 21H
    MOV Y,AL
    
    INT 21H
    MOV Z,AL
    
    SUB X,48 ;THIS IS DONE BECAUSE ALL OUR INPUTS ARE TAKEN IN ASCI
    SUB Y,48
    SUB Z,48
            
    MOV BL,X
    ADD BL,X
    
    ADD BL,Y
    ADD BL,Y
    
    SUB BL,Z
    
    ADD BL,48 ;AFTER WE ARE DONE OPERATION, WE CONVERT BACK TO ASCI
    
    MOV AH,2
    MOV DL,0AH ;ASCI FOR NEWLINE.
    INT 21H
    
    MOV AH,2
    MOV DL,0DH ;ASCI FOR REMOVING EXTRA SPACE AFTER NEWLINE.
    INT 21H
       
    MOV AH,2
    MOV DL,BL
    INT 21H    
    
           
ret




