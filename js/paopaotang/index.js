function Player(name,teamColor) {
    this.name = name;
    this.teamColor = teamColor;//队伍的颜色
    this.enemies = [];
    this.partners = [];
    this.state = 'live';
}

Player.prototype.win = function(){
    console.log(`${this.name} win!`);
}
Player.prototype.lose = function(){
    console.log(`${this.name} lose!`);
}
Player.prototype.die = function(){
    this.lose();
    this.all_dead = true;
    for(let i = 0; i < this.partners.length; i ++) {
        if(this.partners[i].state === 'live') {
            all_dead = false;
            break;
        }
    }
    if(all_dead) {
        this.lose();
        for(let j = 0; j < this.enemies.length; j ++) {
            this.enemies[j].win();
        }
        for(let i = 0; i < this.partners.length; i ++) {
            this.partners[i].lose();
        }
    }
    // this.enemy.win();
}
const players = [];
function playerFactory(name, teamColor) {
    // 实例化 分配队伍
    var newPlayer = new Player(name,teamColor);
    for(var i = 0; i < players.length; i++) {
        const player = players[i];
        if(player.teamColor !== newPlayer.teamColor) {
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
            
        }else {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
    
}
const player1 = playerFactory('皮蛋','red');
const player2 = playerFactory('小乖','red');
const player3 = playerFactory('宝宝','red');
const player4 = playerFactory('小强','red');

const player5 = playerFactory('黑妞','blue');
const player6 = playerFactory('葱头','blue');
const player7 = playerFactory('胖墩','blue');
const player8 = playerFactory('海盗','blue');
// const player1 = new Player('皮蛋','red');
// const player2 = new Player('小乖','blue');

// // enemy 实例 instanceof => new player
// player1.enemy = player2;
// player2.enemy = player1;
// player2.die();
player1.die();
player2.die();
player3.die();
player4.die();
for(let i = 0; i < player1.enemies.length; i ++) {
    console.log(player1.enemies[i]);
}