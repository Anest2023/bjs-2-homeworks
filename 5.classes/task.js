class PrintEditionItem {
    constructor(authtor, name, releaseDate, pagesCount) {
      this.authtor = authtor;
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.tipe = null;
    }
  
  
    fix() {
      this._state = this._state * 1.5 > 100 ? 100 : this._state * 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
        
        
    }
  
  
    get state() {
      return this._state;
      
    }
  
  }
  
  
  const sherlock = new PrintEditionItem(
    null,
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
  );
  console.log(sherlock.authtor);
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100
  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine"
    }
  }
  
  
  class Book extends PrintEditionItem {
    constructor(authtor, name, releaseDate, pagesCount) {
      super(authtor, name, releaseDate, pagesCount);
      //this.authtor = authtor;
      this.type = "book";
    }
  }

  class NovelBook extends Book {
    constructor (authtor, name, releaseDate, pagesCount) {
      super (authtor, name, releaseDate, pagesCount);
      this.type = "novel";
    }

  }
  
  
  
  class FantasticBook extends Book {
    constructor(authtor, name, releaseDate, pagesCount,) {
      super(authtor, name, releaseDate, pagesCount);
      //this.authtor = authtor;
  
      this.tipe = "fantastic";
    }
  }
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
    //"Аркадий и Борис Стругацкие"
    
  );
  
  console.log(picknick.authtor); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15
  
      