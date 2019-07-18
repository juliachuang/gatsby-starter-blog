---
title: Random stuff
date: "2019-06-10"
---
 Optional long parameter 'programId' is present but cannot be translated into a null value due to being declared as a primitive type. Consider declaring it as object wrapper for the corresponding primitive type.
 
 
     @RequestMapping(value = "/tiers/add", method = RequestMethod.POST)
     @ResponseBody
     public ResponseEntity<List<ProgramIdResponse>> augmentTiers(Long programId,
                                                           List<Tier> tiers,
                                                           BindingResult bindingResult) 
                                                           
 org.springframework.beans.BeanInstantiationException: Could not instantiate bean class [java.util.List]: Specified class is an interface
 	at org.springframework.beans.BeanUtils.instantiateClass(BeanUtils.java:101)