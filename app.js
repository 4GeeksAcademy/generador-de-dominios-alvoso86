let pronoun = ['the','your', 'our', 'his', 'she'];
  let adj = ['great', 'big', 'amazing' ,'awesome'];
  let noun = ['jogger', 'racoon', 'dog', 'rabbit', 'cat'];
  
  // generating the domains
  for(let i = 0; i < pronoun.length; i++) {
    for(let a = 0; a < adj.length; a++) {
      for(let b = 0; b < noun.length; b++) {
        console.log(pronoun[i] + adj[a] + noun[b]+'.com'); 
      }
    }
  }