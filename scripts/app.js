angular.module("gameApp",[])


.controller("mainCtrl",function($scope){
    
    
    $scope.product = gems;
    /*---------player status--------*/
                        $scope.Amr=150;
                        $scope.Ht=500000000000;
                        $scope.Atk=3000;
                        $scope.Mana=100;
                        $scope.Money=1000;
    /*-----------------------------------*/
    
 
    
    
    
    
     /*---------------------function-----find-----monster-------------------------*/
    
    $scope.find = function(){
        
   var  num = Math.floor(Math.random() * 6)+1;
 
                    switch(num){
                                case 1:
                                    $scope.monstername = 'Elephant';
                                    $scope.monsterhp = 5000000000;
                                    $scope.monstermana = 6000;
                                    $scope.monsteratk = 3000;
                                    break;
           
                                case 2:
                                    $scope.monstername = 'Snake';
                                    $scope.monsterhp = 1400000000;
                                    $scope.monstermana = 6000;
                                    $scope.monsteratk = 7000;
                                    break;
         
                                case 3:
                                    $scope.monstername = 'Tiger';
                                    $scope.monsterhp = 25000000000;
                                    $scope.monstermana = 2500;
                                    $scope.monsteratk = 8000;
                                    break;
           
                                case 4:
                                    $scope.monstername = 'Kingkong';
                                    $scope.monsterhp = 8000000000;
                                    $scope.monstermana = 8000;
                                    $scope.monsteratk = 8000;
                                    break;
           
                                case 5:
                                    $scope.monstername = 'Blackbird';
                                    $scope.monsterhp = 60000000;
                                    $scope.monstermana = 6000;
                                    $scope.monsteratk = 7000;
                                    break;
        
                                case 6:
                                    $scope.monstername = 'Butterfly';
                                    $scope.monsterhp = 25000000;
                                    $scope.monstermana = 250;
                                    $scope.monsteratk =4000;
                                    break;
                        
                            }
  
                    }
    /*--------------------end-----------------------------*/ 
    
   
    
    /*------function add chance to critical----------*/
    
    $scope.damage =function(){
        
                var  num = Math.floor(Math.random() * 3) + 1;
        
                        switch(num){
                                
                                case 1:
                                var Att=1;
                                break;
                
                                case 2:
                                var Att=2;  
                                break;      
                
                                case 3:
                                var Att=3;
                                break;
                                }
                            
                            for(b=0;b<Att;b++){
                
                                total= total+damage;
                                $scope.Ht = $scope.Ht-$scope.monsteratk;
                                $scope.monsterhp =$scope.monsterhp-total;
                                if($scope.monsterhp<=0){
                                    alert("You have killed Monster");
                                    break;
                                }
                                else if($scope.Ht<=0){
                                    alert("You have killed Monster");
                                    break;
                                }
                             }
                            $scope.Att = Att;
                            $scope.totalDamage = total;
                            
                        console.log("Damage"+Att+ "x" +total);
          
                }
       /*--------------------end-----------------------------*/ 
})



var b;
var damage = 300000;
var total = 0;
var count = 0;
                                       


                                


var playerHt = 1000;
  var gems=[
            {
        name:'Ruby',
        price: 30000,
        damage:2500000,
        image:'images/ruby.png',
        critical:15,
        },
        
        {
        name:'Supphine',
        price: 45000,
        damage:5000,
        image:'images/sapphire.jpg',
        critical:35,
        },
        
        {
        name:'Diamond',
        price: 1500000,
        damage:100000,
        image:'images/diamond.jpg',
        critical:50
        }
      
        ];

    