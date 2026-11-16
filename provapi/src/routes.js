
import health from '../src/controller/healthController.js'     
import welcome from '../src/controller/welcomeController.js'   
import calculus from '../src/controller/calculusController.js' 
import condicao from '../src/controller/condicaoController.js'
import repeat from '../src/controller/repeatController.js'
import vetor from '../src/controller/vetorController.js'

export function addRoutes(api) {    
  api.use(health);           
  api.use(welcome);          
  api.use(calculus); 
  api.use(condicao);
  api.use(repeat);
  api.use(vetor);        
}