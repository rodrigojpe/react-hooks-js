function gradingStudents() {
    let grades = [];
  
    
    // eslint-disable-next-line no-const-assign
    grades = [4,73,67,38,33] 
      for(let i in grades){
        console.log('grades[i] i ' , grades[i])
          if(grades[i] >= 0 && grades[i] <= 100 ){
              for(let j = 0; j < 10; j ++ ){
                if(grades[i] <= 40){
                    if(grades[i] % 5 !== 0){
                        let temp = grades[i] + j 
                        if(temp % 5 === 0){
                            console.log('temp =>', temp)
                            console.log('multiplo de 5 =>', grades[i])
                            let result = temp - grades[i]
                            if(result < 3 ){
                                grades[i] = grades[i] = j
                                console.log('temp' ,temp)
                                console.log('result', result) 
                                 break;
                            }        
                        } 
                    }else{
                        console.log('dsds')
                    }

                }else{
                    console.log('grade' ,grades[i])
                }
              } 
          }
      }
    
        console.log(grades)
}

gradingStudents()