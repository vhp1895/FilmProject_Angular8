import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieDetail = [
    {
      name: "Fast & Furious Presents: Hobbs & Shaw",
      nameCode: "fast-furious-presents-hobbs-shaw",
      image: "assets/images/movie/fastandfurious.png",
      imageDetail: "assets/images/movie/fastandfurious-detail.jpeg",
      trailer: "https://www.youtube.com/embed/HZ7PAyCDwEg",
      sysnopsis: "Dwayne Johnson reprises his role as Diplomatic Security Service agent Luke Hobbs and Jason Statham returns to play assassin Deckard Shaw in this \"Fast and Furious\" spinoff. The movie follows the duo as they go up against Idris Elba's villainous character.",
      subtitle: "",
      releaseDate: "2019-08-18T00:00:00",
      cast: "Jason Statham , Vanessa Kirby , Dwayne Johnson , Helen Mirren , Idris Elba",
      director: "David Leitch",
      age: "assets/images/movie/age/P13.png",
      runningTime: "136 Minutes",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theatherCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-18T08:00:00",
              showtimeCode: 16855
            },
            {
              hour: "2019-08-18T10:30:00",
              showtimeCode: 16856
            },
            {
              hour: "2019-08-18T12:45:00",
              showtimeCode: 16857
            },
            {
              hour: "2019-08-18T13:15:00",
              showtimeCode: 16858
            },
            {
              hour: "2019-08-18T17:30:00",
              showtimeCode: 16859
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 16860
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 16861
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 16862
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 16863
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 16864
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 16865
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 16866
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 16867
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 16868
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 16869
            }

          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theatherCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-18T08:00:00",
              showtimeCode: 16870
            },
            {
              hour: "2019-08-18T10:30:00",
              showtimeCode: 16871
            },
            {
              hour: "2019-08-18T12:45:00",
              showtimeCode: 16872
            },
            {
              hour: "2019-08-18T13:15:00",
              showtimeCode: 16873
            },
            {
              hour: "2019-08-18T17:30:00",
              showtimeCode: 16874
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 16875
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 16876
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 16877
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 16878
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 16879
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 16880
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 16881
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 16882
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 16883
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 16884
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theatherCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-18T08:00:00",
              showtimeCode: 16885
            },
            {
              hour: "2019-08-18T10:30:00",
              showtimeCode: 16886
            },
            {
              hour: "2019-08-18T12:45:00",
              showtimeCode: 16887
            },
            {
              hour: "2019-08-18T13:15:00",
              showtimeCode: 16888
            },
            {
              hour: "2019-08-18T17:30:00",
              showtimeCode: 16889
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 16890
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 16891
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 16892
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 16893
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 16894
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 16895
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 16896
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 16897
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 16898
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 16899
            }

          ]
        }
      ]
    },
    {
      name: "Spider-Man: Far From Home",
      nameCode: "spider-man-far-from-home",
      image: "assets/images/movie/spiderman.png",
      imageDetail: "assets/images/movie/spiderman-detail.jpeg",
      trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
      sysnopsis: "Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peters plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!",
      subtitle: "",
      releaseDate: "2019-08-18T00:00:00",
      cast: "Cobie Smulders , Marisa Tomei , Jake Gyllenhaal , Zendaya , Michael Keaton , Tom Holland , Samuel L. Jackson , Jon Favreau",
      director: "Jon Watts",
      age: "assets/images/movie/age/P13.png",
      runningTime: "130 Minutes",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 16900
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 16901
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 16902
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 16903
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 16904
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 16905
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 16906
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 16907
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 16908
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 17665
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 17666
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 17667
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 17668
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 17669
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 17670
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 17671
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 17672
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 17673
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 17674
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 17675
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 17676
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 17677
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 17678
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 17679
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 17680
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 17681
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 17682
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 17683
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 17684
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 17685
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 17686
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 17687
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 17688
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 17689
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 17690
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 17691
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 17692
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 17693
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 17694
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 17695
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 17696
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 17697
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 17698
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 17699
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 17700
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 17701
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 17702
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 17703
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 17704
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 17705
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 17706
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 17707
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 17708
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 17709
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 17710
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 17711
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 17712
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 17713
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 17714
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 17715
            }
          ]
        }
      ]
    },
    {
      name: "Boboiboy Movie 2",
      nameCode: "boboiboy-movie-2",
      image: "assets/images/movie/boboiboy.jpeg",
      imageDetail: "assets/images/movie/boboiboy-detail.jpeg",
      trailer: "https://www.youtube.com/embed/WoFJ8nV4OV4",
      sysnopsis: "This time around BoBoiBoy goes up against a powerful ancient being called Retak'ka, who is after BoBoiBoy's elemental powers. He and his friends will have to stop their mysterious new foe from carrying out his sinister plans.",
      subtitle: "English, Chinese",
      releaseDate: "2019-08-18T00:00:00",
      cast: "Dzubir Mohammed Zakaria , Nur Fathiah Diaz , Nur Sarah Alisya Zainal Rashid , Wong Wai Kay , Fadzli Mohd Rawi , Yap Ee Jean",
      director: "Nizam Abdul Razak",
      age: "assets/images/movie/age/P13.png",
      runningTime: "110 Minutes",
      language: "Malay",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 17716
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 17717
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 17718
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 18475
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 18476
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 18477
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 18478
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 18479
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 18480
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 18481
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 18482
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 18483
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 18484
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 18485
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 18486
            },
            {
              hour: "2019-08-22T08:00:00",
              showtimeCode: 18487
            },
            {
              hour: "2019-08-22T10:30:00",
              showtimeCode: 18488
            },
            {
              hour: "2019-08-22T12:45:00",
              showtimeCode: 18489
            },
            {
              hour: "2019-08-22T13:15:00",
              showtimeCode: 18490
            },
            {
              hour: "2019-08-22T17:30:00",
              showtimeCode: 18491
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 18492
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 18493
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 18494
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 18495
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 18496
            }
          ]
        },
        {
          theatername: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 18497
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 18498
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 18499
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 18500
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 18501
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 18502
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 18503
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 18504
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 18505
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 18506
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 18507
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 18508
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 18509
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 18510
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 18511
            },
            {
              hour: "2019-08-22T08:00:00",
              showtimeCode: 18512
            },
            {
              hour: "2019-08-22T10:30:00",
              showtimeCode: 18513
            },
            {
              hour: "2019-08-22T12:45:00",
              showtimeCode: 18514
            },
            {
              hour: "2019-08-22T13:15:00",
              showtimeCode: 18515
            },
            {
              hour: "2019-08-22T17:30:00",
              showtimeCode: 18516
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 18517
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 18518
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 18519
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 18520
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 18521
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 18522
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 18523
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 18524
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 18525
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 18526
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 18527
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 18528
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 19285
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 19286
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 19287
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 19288
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 19289
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 19290
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 19291
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 19292
            },
            {
              hour: "2019-08-22T08:00:00",
              showtimeCode: 19293
            },
            {
              hour: "2019-08-22T10:30:00",
              showtimeCode: 19294
            },
            {
              hour: "2019-08-22T12:45:00",
              showtimeCode: 19295
            },
            {
              hour: "2019-08-22T13:15:00",
              showtimeCode: 19296
            },
            {
              hour: "2019-08-22T17:30:00",
              showtimeCode: 19297
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 19298
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 19299
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 19300
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 19301
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 19302
            }
          ]
        }
      ]
    },
    {
      name: "The Divine Fury",
      nameCode: "the-divine-fury",
      image: "assets/images/movie/divinefury.png",
      imageDetail: "assets/images/movie/divinefury-detail.png",
      trailer: "https://www.youtube.com/embed/2FYClisZ47o",
      sysnopsis: "His father's death in an accident during his childhood causes Yong-Hoo to become distrustful of people. He grows up to be a martial arts champion and when he encounters Priest An, he gains divine power in order to fight off a powerful evil force. ",
      subtitle: "English, Bahasa Malaysia, Chinese",
      releaseDate: "2019-08-18T00:00:00",
      cast: "Ahn Sung-Ki , Woo Do-Hwan , Park Seo-Joon",
      director: "Kim Joo-Hwan",
      age: "assets/images/movie/age/P18.png",
      runningTime: "130 Minutes",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 19303
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 19304
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 19305
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 19306
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 19307
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 19308
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 19309
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 19310
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 19311
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 19312
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 19313
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 19314
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 19315
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 19316
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 19317
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 19318
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 19319
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 19320
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 19321
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 19322
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 19323
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 19324
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 19325
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 19326
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 19327
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 19328
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 19329
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 19330
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 19331
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 19332
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 19333
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 19334
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 19335
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 19336
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 19337
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 19338
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 20095
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 20096
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 20097
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 20098
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 20099
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 20100
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 20101
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 20102
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 20103
            }
          ]
        }
      ]
    },
    {
      name: "The Lion King",
      nameCode: "the-lion-king",
      image: "assets/images/movie/lionking.png",
      imageDetail: "assets/images/movie/lionking-detail.jpeg",
      trailer: "https://www.youtube.com/embed/7TavVZMewpY",
      sysnopsis: "A live-action musical drama adaptation of Disney's 1994 classic animated film by the same name. It tells of a lion named Simba and his journey of becoming king, which is not an easy path as his uncle has plans of his own to take over the throne. The battle for Pride Rock results in Simba's exile but with help from two newfound friends, he will return for what is rightfully his.",
      subtitle: "Bahasa Malaysia, Chinese",
      releaseDate: "2019-08-18T00:00:00",
      cast: "",
      director: "",
      age: "assets/images/movie/age/P13.png",
      runningTime: "118 Minutes",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 20104
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 20105
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 20106
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 20107
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 20108
            },
            {
              hour: "2019-08-20T07:00:00",
              showtimeCode: 20109
            },
            {
              hour: "2019-08-20T09:30:00",
              showtimeCode: 20110
            },
            {
              hour: "2019-08-20T11:45:00",
              showtimeCode: 20111
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 20112
            },
            {
              hour: "2019-08-20T15:30:00",
              showtimeCode: 20113
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 20114
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 20115
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 20116
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 20117
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 20118
            },
            {
              hour: "2019-08-22T08:00:00",
              showtimeCode: 20119
            },
            {
              hour: "2019-08-22T10:30:00",
              showtimeCode: 20120
            },
            {
              hour: "2019-08-22T12:45:00",
              showtimeCode: 20121
            },
            {
              hour: "2019-08-22T13:15:00",
              showtimeCode: 20122
            },
            {
              hour: "2019-08-22T17:30:00",
              showtimeCode: 20123
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 20124
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 20125
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 20126
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 20127
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 20128
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 20129
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 20130
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 20131
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 20132
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 20133
            },
            {
              hour: "2019-08-20T07:00:00",
              showtimeCode: 20134
            },
            {
              hour: "2019-08-20T09:30:00",
              showtimeCode: 20135
            },
            {
              hour: "2019-08-20T11:45:00",
              showtimeCode: 20136
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 20137
            },
            {
              hour: "2019-08-20T15:30:00",
              showtimeCode: 20138
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 20139
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 20140
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 20141
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 20142
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 20143
            },
            {
              hour: "2019-08-22T08:00:00",
              showtimeCode: 20144
            },
            {
              hour: "2019-08-22T10:30:00",
              showtimeCode: 20145
            },
            {
              hour: "2019-08-22T12:45:00",
              showtimeCode: 20146
            },
            {
              hour: "2019-08-22T13:15:00",
              showtimeCode: 20147
            },
            {
              hour: "2019-08-22T17:30:00",
              showtimeCode: 20148
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 20905
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 20906
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 20907
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 20908
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 20909
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 20910
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 20911
            },
            {
              hour: "2019-08-18T14:45:00",
              showtimeCode: 20912
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 20913
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 20914
            },
            {
              hour: "2019-08-20T07:00:00",
              showtimeCode: 20915
            },
            {
              hour: "2019-08-20T09:30:00",
              showtimeCode: 20916
            },
            {
              hour: "2019-08-20T11:45:00",
              showtimeCode: 20917
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 20918
            },
            {
              hour: "2019-08-20T15:30:00",
              showtimeCode: 20919
            },
            {
              hour: "2019-08-21T08:00:00",
              showtimeCode: 20920
            },
            {
              hour: "2019-08-21T10:30:00",
              showtimeCode: 20921
            },
            {
              hour: "2019-08-21T12:45:00",
              showtimeCode: 20922
            },
            {
              hour: "2019-08-21T13:15:00",
              showtimeCode: 20923
            },
            {
              hour: "2019-08-21T17:30:00",
              showtimeCode: 20924
            },
            {
              hour: "2019-08-22T08:00:00",
              showtimeCode: 20925
            },
            {
              hour: "2019-08-22T10:30:00",
              showtimeCode: 20927
            },
            {
              hour: "2019-08-22T12:45:00",
              showtimeCode: 20928
            },
            {
              hour: "2019-08-22T13:15:00",
              showtimeCode: 20929
            },
            {
              hour: "2019-08-22T17:30:00",
              showtimeCode: 20930
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 20931
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 20932
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 20933
            },
            {
              hour: "2019-08-24T13:15:00",
              showtimeCode: 20934
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 20935
            }
          ]
        },
      ]
    },
    {
      name: "Abigail",
      nameCode: "abigail",
      image: "assets/images/movie/abygail.jpeg",
      imageDetail: "assets/images/movie/abigail-detail.jpeg",
      trailer: "https://www.youtube.com/embed/K-vTCIRCLrw",
      sysnopsis: "Due to a breakout of a mysterious disease, the city a young girl named Abigail lives in has its borders closed many years ago. She was only six when her father, who was one of the sick, was taken away. Now she goes against the authorities to look for her father. As she does so, she comes to learn of the magic in her city and of the extraordinary magical abilities she herself possesses.",
      subtitle: "",
      releaseDate: "2019-08-18T00:00:00",
      cast: "Gleb Bochkov , Rinal Mukhametov , Tinatin Dalakishvili",
      director: "Aleksandr Boguslavsky",
      age: "assets/images/movie/age/P13.png",
      runningTime: "120 Minutes",
      language: "Russian",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 20936
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 20937
            },
            {
              hour: "2019-08-18T15:45:00",
              showtimeCode: 20938
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 20939
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 20940
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 20941
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 20942
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 20943
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 20944
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 20945
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 20946
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 20947
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 20948
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 20949
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 20950
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 20951
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 20952
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 20953
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 20954
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 20955
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 20956
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 20957
            },
            {
              hour: "2019-08-18T15:45:00",
              showtimeCode: 20958
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 21715
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 21716
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 21717
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 21718
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 21719
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 21720
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 21721
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 21722
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 21723
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 21724
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 21725
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 21726
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 21727
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 21728
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 21729
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 21730
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 21520
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-18T07:00:00",
              showtimeCode: 21732
            },
            {
              hour: "2019-08-18T09:30:00",
              showtimeCode: 21733
            },
            {
              hour: "2019-08-18T15:45:00",
              showtimeCode: 21734
            },
            {
              hour: "2019-08-18T17:15:00",
              showtimeCode: 21735
            },
            {
              hour: "2019-08-18T19:30:00",
              showtimeCode: 21736
            },
            {
              hour: "2019-08-19T07:00:00",
              showtimeCode: 21737
            },
            {
              hour: "2019-08-19T09:30:00",
              showtimeCode: 21738
            },
            {
              hour: "2019-08-19T11:45:00",
              showtimeCode: 21739
            },
            {
              hour: "2019-08-19T13:15:00",
              showtimeCode: 21740
            },
            {
              hour: "2019-08-19T15:30:00",
              showtimeCode: 21741
            },
            {
              hour: "2019-08-20T08:00:00",
              showtimeCode: 21742
            },
            {
              hour: "2019-08-20T10:30:00",
              showtimeCode: 21743
            },
            {
              hour: "2019-08-20T12:45:00",
              showtimeCode: 21744
            },
            {
              hour: "2019-08-20T13:15:00",
              showtimeCode: 21745
            },
            {
              hour: "2019-08-20T17:30:00",
              showtimeCode: 21746
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 21747
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 21748
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 21749
            },
            {
              hour: "2019-08-23T13:15:00",
              showtimeCode: 21750
            },
            {
              hour: "2019-08-23T17:30:00",
              showtimeCode: 21751
            }
          ]
        },
      ]
    },
    {
      name: "Death Whisper",
      nameCode: "death-whisper",
      image: "assets/images/movie/deathwhisper.jpeg",
      imageDetail: "assets/images/movie/deathwhisper-detail.jpeg",
      trailer: "https://www.youtube.com/embed/oVwWAckKdm0",
      sysnopsis: "Alex, a new highschool student met Maggie, and become best friends. Suddenly weird things started to happen in their highschool.",
      subtitle: "",
      releaseDate: "2019-08-22T00:00:00",
      cast: "Angga Yunanda , Arya Vasco , Amanda Rawles , Naomi Paulinda , Teuku Ryzki",
      director: "Awi Suryadi",
      age: "assets/images/movie/age/P13.png",
      runningTime: "",
      language: "Indonesian",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 21752
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 21753
            },
            {
              hour: "2019-08-23T16:45:00",
              showtimeCode: 21754
            },
            {
              hour: "2019-08-23T17:16:00",
              showtimeCode: 21755
            },
            {
              hour: "2019-08-23T19:30:00",
              showtimeCode: 21756
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 21757
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 21758
            },
            {
              hour: "2019-08-23T16:45:00",
              showtimeCode: 21759
            },
            {
              hour: "2019-08-23T17:16:00",
              showtimeCode: 21760
            },
            {
              hour: "2019-08-23T19:30:00",
              showtimeCode: 21761
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 21762
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 21763
            },
            {
              hour: "2019-08-23T16:45:00",
              showtimeCode: 21764
            },
            {
              hour: "2019-08-23T17:16:00",
              showtimeCode: 21765
            },
            {
              hour: "2019-08-23T19:30:00",
              showtimeCode: 21766
            }
          ]
        },
      ]
    },
    {
      name: "Whethering With You",
      nameCode: "whethering-with-you",
      image: "assets/images/movie/withyou.png",
      imageDetail: "assets/images/movie/withyou.jpeg",
      trailer: "https://www.youtube.com/embed/xj4jEzJUF5o",
      sysnopsis: "When small town high schooler Hodaka Morishima makes a go at living on his own in Tokyo for the first time, it isn’t long before he finds steady work writing for a local magazine focused on all things strange and supernatural -- but the most interesting thing happening in the boy’s life is the unusual weather. Rain’s common enough in the city that at first, no one makes much of the recent torrential showers that never seem to end, but unbeknownst to nearly everyone, a young girl named Hina Amano who has the ability to control the weather walks among them.",
      subtitle: "",
      releaseDate: "2019-08-22T00:00:00",
      cast: "Sei Hiraizumi , Yuki Kaji , Tsubasa Honda , Sakura Kiryu , Kotaro Daigo , Nana Mori , Shun Oguri , Chieko Baisho",
      director: "Makoto Shinkai",
      age: "assets/images/movie/age/P13.png",
      runningTime: "120 Minutes",
      language: "Japanese",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 21767
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 21768
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 22525
            },
            {
              hour: "2019-08-22T17:15:00",
              showtimeCode: 22526
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 22527
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 22528
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 22529
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 22530
            },
            {
              hour: "2019-08-24T17:15:00",
              showtimeCode: 22531
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 22532
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 22533
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 22534
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 22535
            },
            {
              hour: "2019-08-22T17:15:00",
              showtimeCode: 22536
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 22537
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 22538
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 22539
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 22540
            },
            {
              hour: "2019-08-24T17:15:00",
              showtimeCode: 22541
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 22542
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 22543
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 22544
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 22545
            },
            {
              hour: "2019-08-22T17:15:00",
              showtimeCode: 22546
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 22547
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 22548
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 22549
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 22550
            },
            {
              hour: "2019-08-24T17:15:00",
              showtimeCode: 22551
            },
            {
              hour: "2019-08-24T17:30:00",
              showtimeCode: 22552
            }
          ]
        }
      ]
    },
    {
      name: "Joker",
      nameCode: "joker",
      image: "assets/images/movie/joker.png",
      imageDetail: "assets/images/movie/staytuned.jpeg",
      trailer: "https://www.youtube.com/embed/t433PEQGErc",
      sysnopsis: "Set in the 1980s, the movie tells the origin story of the Joker. The Clown Prince of Crime starts causing chaos and mayhem in Gotham City after failing to find success as a stand-up comedian.",
      subtitle: "",
      releaseDate: "2019-08-22T00:00:00",
      cast: "Zazie Beetz , Joaquin Phoenix , Robert De Niro , Bill Camp , Frances Conroy",
      director: "Todd Phillips",
      age: "assets/images/movie/age/P13.png",
      runningTime: "130 Minutes",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 22553
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 22554
            },
            {
              hour: "2019-08-23T14:45:00",
              showtimeCode: 22555
            },
            {
              hour: "2019-08-23T18:15:00",
              showtimeCode: 22556
            },
            {
              hour: "2019-08-23T19:30:00",
              showtimeCode: 22557
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 22558
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 22559
            },
            {
              hour: "2019-08-23T14:45:00",
              showtimeCode: 22560
            },
            {
              hour: "2019-08-23T18:15:00",
              showtimeCode: 22561
            },
            {
              hour: "2019-08-23T19:30:00",
              showtimeCode: 22562
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 22563
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 22564
            },
            {
              hour: "2019-08-23T14:45:00",
              showtimeCode: 22565
            },
            {
              hour: "2019-08-23T18:15:00",
              showtimeCode: 22566
            },
            {
              hour: "2019-08-23T19:30:00",
              showtimeCode: 22567
            }
          ]
        }
      ]
    },
    {
      name: "Zombieland 2: Double Tap",
      nameCode: "zombieland-2-double-tap",
      image: "assets/images/movie/zomebieland.jpeg",
      imageDetail: "assets/images/movie/staytuned.jpeg",
      trailer: "https://www.youtube.com/embed/ZlW9yhUKlkQ",
      sysnopsis: "The geeky Columbus, violent Tallahasse, and sisters Wichita and Little Rock now have to face off against evolved zombies as well as other human survivors.",
      subtitle: "",
      releaseDate: "2019-08-22T00:00:00",
      cast: "Woody Harrelson , Abigail Breslin , Emma Stone , Jesse Eisenberg",
      director: "Ruben Fleischer",
      age: "assets/images/movie/age/P13.png",
      runningTime: "",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 22568
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 22569
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 22570
            },
            {
              hour: "2019-08-22T19:15:00",
              showtimeCode: 22571
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 22572
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 22573
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 22574
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 22575
            },
            {
              hour: "2019-08-24T19:15:00",
              showtimeCode: 22576
            },
            {
              hour: "2019-08-24T21:30:00",
              showtimeCode: 22577
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 22578
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 23335
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 23336
            },
            {
              hour: "2019-08-22T19:15:00",
              showtimeCode: 23337
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 23338
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 23339
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 23340
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 23341
            },
            {
              hour: "2019-08-24T19:15:00",
              showtimeCode: 23342
            },
            {
              hour: "2019-08-24T21:30:00",
              showtimeCode: 23343
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 23344
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 23345
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 23346
            },
            {
              hour: "2019-08-22T19:15:00",
              showtimeCode: 23347
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 23348
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 23349
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 23350
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 23351
            },
            {
              hour: "2019-08-24T19:15:00",
              showtimeCode: 23352
            },
            {
              hour: "2019-08-24T21:30:00",
              showtimeCode: 23353
            }
          ]
        }
      ]
    },
    {
      name: "Doctor Strange in the Multiverse of Madness",
      nameCode: "doctor-strange-in-the-multiverse-of-madness",
      image: "assets/images/movie/doctorstrange.png",
      imageDetail: "assets/images/movie/staytuned.jpeg",
      trailer: "https://www.youtube.com/embed/6ofIpu9AEUI",
      sysnopsis: "",
      subtitle: "",
      releaseDate: "2019-08-22T00:00:00",
      cast: "Benedict Cumberbatch , Elizabeth Olsen",
      director: "Scott Derrickson",
      age: "assets/images/movie/age/P13.png",
      runningTime: "140 Minutes",
      language: "English",
      showtime: [
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 23354
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 23355
            },
            {
              hour: "2019-08-23T14:45:00",
              showtimeCode: 23356
            },
            {
              hour: "2019-08-23T20:15:00",
              showtimeCode: 23357
            },
            {
              hour: "2019-08-23T21:30:00",
              showtimeCode: 23358
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 23359
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 23360
            },
            {
              hour: "2019-08-23T14:45:00",
              showtimeCode: 23361
            },
            {
              hour: "2019-08-23T20:15:00",
              showtimeCode: 23362
            },
            {
              hour: "2019-08-23T21:30:00",
              showtimeCode: 23363
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-23T07:00:00",
              showtimeCode: 23364
            },
            {
              hour: "2019-08-23T09:30:00",
              showtimeCode: 23365
            },
            {
              hour: "2019-08-23T14:45:00",
              showtimeCode: 23366
            },
            {
              hour: "2019-08-23T20:15:00",
              showtimeCode: 23367
            },
            {
              hour: "2019-08-23T21:30:00",
              showtimeCode: 23368
            }
          ]
        }
      ]
    },
    {
      name: "Artemis Fowl",
      nameCode: "artemis-fowl",
      image: "assets/images/movie/artemis.png",
      imageDetail: "assets/images/movie/staytuned.jpeg",
      trailer: "https://www.youtube.com/embed/wXlBep9uFjI",
      sysnopsis: "Desperate to save his father, a young Irish criminal mastermind by the name of Artemis Fowl kidnaps the fairy LEPrecon officer Holly Short for ransom. The two then end up on a journey to save Artemis Fowl senior from the Arctic and defeat the evil pixie Opal Koboi.",
      subtitle: "",
      releaseDate: "2019-08-22T00:00:00",
      cast: "Ferdia Shaw , Lara McDonnell , Judi Dench , Nonso Anozie , Josh Gad , Hong Chau",
      director: "Kenneth Branagh",
      age: "assets/images/movie/age/P13.png",
      runningTime: "130 Minutes",
      language: "English",
      showtime: [,
        {
          theaterName: "TGV DPulze",
          theaterCode: "TGV-DPulze",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 23369
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 23370
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 23371
            },
            {
              hour: "2019-08-22T19:15:00",
              showtimeCode: 23372
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 23373
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 23374
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 23375
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 23376
            },
            {
              hour: "2019-08-23T19:15:00",
              showtimeCode: 23377
            },
            {
              hour: "2019-08-23T21:30:00",
              showtimeCode: 23378
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 23379
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 23380
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 23381
            },
            {
              hour: "2019-08-24T19:15:00",
              showtimeCode: 23382
            },
            {
              hour: "2019-08-24T21:30:00",
              showtimeCode: 23383
            }
          ]
        },
        {
          theaterName: "TGV Gurney Paragon",
          theaterCode: "TGV-Gurney-Paragon",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 23384
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 23385
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 23386
            },
            {
              hour: "2019-08-22T19:15:00",
              showtimeCode: 23387
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 23388
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 37153
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 37154
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 37155
            },
            {
              hour: "2019-08-23T19:15:00",
              showtimeCode: 37156
            },
            {
              hour: "2019-08-23T21:30:00",
              showtimeCode: 37157
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 37158
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 37159
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 37160
            },
            {
              hour: "2019-08-24T19:15:00",
              showtimeCode: 37161
            },
            {
              hour: "2019-08-24T21:30:00",
              showtimeCode: 37162
            }
          ]
        },
        {
          theaterName: "TGV Imperial City",
          theaterCode: "TGV-Imperial-City",
          showtimes: [
            {
              hour: "2019-08-22T07:00:00",
              showtimeCode: 37163
            },
            {
              hour: "2019-08-22T09:30:00",
              showtimeCode: 37164
            },
            {
              hour: "2019-08-22T14:45:00",
              showtimeCode: 37165
            },
            {
              hour: "2019-08-22T19:15:00",
              showtimeCode: 37166
            },
            {
              hour: "2019-08-22T19:30:00",
              showtimeCode: 37167
            },
            {
              hour: "2019-08-23T08:00:00",
              showtimeCode: 37168
            },
            {
              hour: "2019-08-23T10:30:00",
              showtimeCode: 37169
            },
            {
              hour: "2019-08-23T12:45:00",
              showtimeCode: 37170
            },
            {
              hour: "2019-08-23T19:15:00",
              showtimeCode: 37171
            },
            {
              hour: "2019-08-23T21:30:00",
              showtimeCode: 37172
            },
            {
              hour: "2019-08-24T08:00:00",
              showtimeCode: 37173
            },
            {
              hour: "2019-08-24T10:30:00",
              showtimeCode: 37174
            },
            {
              hour: "2019-08-24T12:45:00",
              showtimeCode: 37175
            },
            {
              hour: "2019-08-24T19:15:00",
              showtimeCode: 37176
            },
            {
              hour: "2019-08-24T21:30:00",
              showtimeCode: 37177
            }
          ]
        }
      ]
    }
  ]
  showtimeByTheater = [
    {
      theaterName: "TGV DPulze",
      theaterCode: "TGV-DPulze",
      movieList: [
        {
          movieName: "Fast & Furious Presents: Hobbs & Shaw",
          image: "assets/images/movie/fastandfurious.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T08:00:00",
                  showtimeCode: 16855
                },
                {
                  hour: "2019-08-18T10:30:00",
                  showtimeCode: 16856
                },
                {
                  hour: "2019-08-18T12:45:00",
                  showtimeCode: 16857
                },
                {
                  hour: "2019-08-18T13:15:00",
                  showtimeCode: 16858
                },
                {
                  hour: "2019-08-18T17:30:00",
                  showtimeCode: 16859
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 16860
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 16861
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 16862
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 16863
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 16864
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 16865
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 16866
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 16867
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 16868
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 16869
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "Spider-Man: Far From Home",
          image: "assets/images/movie/spiderman.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 16900
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 16901
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 16902
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 16903
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 16904
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 16905
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 16906
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 16907
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 16908
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 17665
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 17666
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 17667
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 17668
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 17669
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 17670
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 17671
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 17672
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 17673
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 17674
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 17675
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "BoboiBoy Movie 2",
          image: "assets/images/movie/boboiboy.jpeg",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 17716
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 17717
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 17718
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 18475
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 18476
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 18477
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 18478
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 18479
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 18480
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 18481
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 18482
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 18483
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 18484
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 18485
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 18486
                }
              ]
            },
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T08:00:00",
                  showtimeCode: 18487
                },
                {
                  hour: "2019-08-22T10:30:00",
                  showtimeCode: 18488
                },
                {
                  hour: "2019-08-22T12:45:00",
                  showtimeCode: 18489
                },
                {
                  hour: "2019-08-22T13:15:00",
                  showtimeCode: 18490
                },
                {
                  hour: "2019-08-22T17:30:00",
                  showtimeCode: 18491
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 18492
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 18493
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 18494
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 18495
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 18496
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "The Divine Fury",
          image: "assets/images/movie/divinefury.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 19303
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 19304
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 19305
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 19306
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 19307
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 19308
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 19309
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 19310
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 19311
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 19312
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 19313
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 19314
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 19315
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 19316
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 19317
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "The Lion King",
          image: "assets/images/movie/lionking.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 20104
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 20105
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 20106
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 20107
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 20108
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T07:00:00",
                  showtimeCode: 20109
                },
                {
                  hour: "2019-08-20T09:30:00",
                  showtimeCode: 20110
                },
                {
                  hour: "2019-08-20T11:45:00",
                  showtimeCode: 20111
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 20112
                },
                {
                  hour: "2019-08-20T15:30:00",
                  showtimeCode: 20113
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 20114
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 20115
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 20116
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 20117
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 20118
                }
              ]
            },
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T08:00:00",
                  showtimeCode: 20119
                },
                {
                  hour: "2019-08-22T10:30:00",
                  showtimeCode: 20120
                },
                {
                  hour: "2019-08-22T12:45:00",
                  showtimeCode: 20121
                },
                {
                  hour: "2019-08-22T13:15:00",
                  showtimeCode: 20122
                },
                {
                  hour: "2019-08-22T17:30:00",
                  showtimeCode: 20123
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 20124
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 20125
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 20126
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 20127
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 20128
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Abigail",
          image: "assets/images/movie/abygail.jpeg",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 20936
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 20937
                },
                {
                  hour: "2019-08-18T15:45:00",
                  showtimeCode: 20938
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 20939
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 20940
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 20941
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 20942
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 20943
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 20944
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 20945
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 20946
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 20947
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 20948
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 20949
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 20950
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 20951
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 20952
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 20953
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 20954
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 20955
                }
              ]
            },
          ]
        }, //clean
        {
          movieName: "Death Whisper",
          image: "assets/images/movie/deathwhisper.jpeg",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 21752
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 21753
                },
                {
                  hour: "2019-08-23T16:45:00",
                  showtimeCode: 21754
                },
                {
                  hour: "2019-08-23T17:16:00",
                  showtimeCode: 21755
                },
                {
                  hour: "2019-08-23T19:30:00",
                  showtimeCode: 21756
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Whethering With You",
          image: "assets/images/movie/withyou.png",
          showtimes: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 21767
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 21768
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 22525
                },
                {
                  hour: "2019-08-22T17:15:00",
                  showtimeCode: 22526
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 22527
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 22528
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 22529
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 22530
                },
                {
                  hour: "2019-08-24T17:15:00",
                  showtimeCode: 22531
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 22532
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "Joker",
          image: "assets/images/movie/joker.png",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 22553
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 22554
                },
                {
                  hour: "2019-08-23T14:45:00",
                  showtimeCode: 22555
                },
                {
                  hour: "2019-08-23T18:15:00",
                  showtimeCode: 22556
                },
                {
                  hour: "2019-08-23T19:30:00",
                  showtimeCode: 22557
                }
              ]
            }
          ]
        },
        {
          movieName: "Zombieland: Double Tap",
          image: "assets/images/movie/zomebieland.jpeg",
          showtimes: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 22568
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 22569
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 22570
                },
                {
                  hour: "2019-08-22T19:15:00",
                  showtimeCode: 22571
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 22572
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 22573
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 22574
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 22575
                },
                {
                  hour: "2019-08-24T19:15:00",
                  showtimeCode: 22576
                },
                {
                  hour: "2019-08-24T21:30:00",
                  showtimeCode: 22577
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Doctor Strange: Multiverse",
          image: "assets/images/movie/doctorstrange.png",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 23354
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 23355
                },
                {
                  hour: "2019-08-23T14:45:00",
                  showtimeCode: 23356
                },
                {
                  hour: "2019-08-23T20:15:00",
                  showtimeCode: 23357
                },
                {
                  hour: "2019-08-23T21:30:00",
                  showtimeCode: 23358
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Artemis Foul",
          image: "assets/images/movie/artemis.png",
          time: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 23369
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 23370
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 23371
                },
                {
                  hour: "2019-08-22T19:15:00",
                  showtimeCode: 23372
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 23373
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 23374
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 23375
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 23376
                },
                {
                  hour: "2019-08-23T19:15:00",
                  showtimeCode: 23377
                },
                {
                  hour: "2019-08-23T21:30:00",
                  showtimeCode: 23378
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 23379
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 23380
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 23381
                },
                {
                  hour: "2019-08-24T19:15:00",
                  showtimeCode: 23382
                },
                {
                  hour: "2019-08-24T21:30:00",
                  showtimeCode: 23383
                }
              ]
            }
          ]
        }
      ]
    },
    {
      theaterName: "TGV Gurney Paragon",
      theaterCode: "TGV-Gurney-Paragon",
      movieList: [
        {
          movieName: "Fast & Furious Presents: Hobbs & Shaw",
          image: "assets/images/movie/fastandfurious.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T08:00:00",
                  showtimeCode: 16870
                },
                {
                  hour: "2019-08-18T10:30:00",
                  showtimeCode: 16871
                },
                {
                  hour: "2019-08-18T12:45:00",
                  showtimeCode: 16872
                },
                {
                  hour: "2019-08-18T13:15:00",
                  showtimeCode: 16873
                },
                {
                  hour: "2019-08-18T17:30:00",
                  showtimeCode: 16874
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 16875
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 16876
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 16877
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 16878
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 16879
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 16880
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 16881
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 16882
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 16883
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 16884
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "Spider-Man: Far From Home",
          image: "assets/images/movie/spiderman.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 17676
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 17677
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 17678
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 17679
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 17680
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 17681
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 17682
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 17683
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 17684
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 17685
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 17686
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 17687
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 17688
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 17689
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 17690
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 17691
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 17692
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 17693
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 17694
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 17695
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "BoboiBoy Movie 2",
          image: "assets/images/movie/boboiboy.jpeg",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 18497
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 18498
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 18499
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 18500
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 18501
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 18502
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 18503
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 18504
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 18505
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 18506
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 18507
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 18508
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 18509
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 18510
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 18511
                }
              ]
            },
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T08:00:00",
                  showtimeCode: 18512
                },
                {
                  hour: "2019-08-22T10:30:00",
                  showtimeCode: 18513
                },
                {
                  hour: "2019-08-22T12:45:00",
                  showtimeCode: 18514
                },
                {
                  hour: "2019-08-22T13:15:00",
                  showtimeCode: 18515
                },
                {
                  hour: "2019-08-22T17:30:00",
                  showtimeCode: 18516
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 18517
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 18518
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 18519
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 18520
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 18521
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "The Divine Fury",
          image: "assets/images/movie/divinefury.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 19318
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 19319
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 19320
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 19321
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 19322
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 19323
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 19324
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 19325
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 19326
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 19327
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 19328
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 19329
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 19330
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 19331
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 19332
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "The Lion King",
          image: "assets/images/movie/lionking.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 20129
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 20130
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 20131
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 20132
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 201331
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T07:00:00",
                  showtimeCode: 20134
                },
                {
                  hour: "2019-08-20T09:30:00",
                  showtimeCode: 20135
                },
                {
                  hour: "2019-08-20T11:45:00",
                  showtimeCode: 20136
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 20137
                },
                {
                  hour: "2019-08-20T15:30:00",
                  showtimeCode: 20138
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 20139
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 20140
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 20141
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 20142
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 20143
                }
              ]
            },
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T08:00:00",
                  showtimeCode: 20144
                },
                {
                  hour: "2019-08-22T10:30:00",
                  showtimeCode: 20145
                },
                {
                  hour: "2019-08-22T12:45:00",
                  showtimeCode: 20146
                },
                {
                  hour: "2019-08-22T13:15:00",
                  showtimeCode: 20147
                },
                {
                  hour: "2019-08-22T17:30:00",
                  showtimeCode: 20148
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 20905
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 20906
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 20907
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 20908
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 20909
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Abigail",
          image: "assets/images/movie/abygail.jpeg",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 20956
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 20957
                },
                {
                  hour: "2019-08-18T15:45:00",
                  showtimeCode: 20958
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 21715
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 21716
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 21717
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 21718
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 21719
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 21720
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 21721
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 21722
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 21723
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 21724
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 21725
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 21726
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 21727
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 21728
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 21729
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 21730
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 21520
                }
              ]
            },
          ]
        }, //clean
        {
          movieName: "Death Whisper",
          image: "assets/images/movie/deathwhisper.jpeg",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 21757
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 21758
                },
                {
                  hour: "2019-08-23T16:45:00",
                  showtimeCode: 21759
                },
                {
                  hour: "2019-08-23T17:16:00",
                  showtimeCode: 21760
                },
                {
                  hour: "2019-08-23T19:30:00",
                  showtimeCode: 21761
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Whethering With You",
          image: "assets/images/movie/withyou.png",
          showtimes: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 22533
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 22534
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 22535
                },
                {
                  hour: "2019-08-22T17:15:00",
                  showtimeCode: 22536
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 22537
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 22538
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 22539
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 22540
                },
                {
                  hour: "2019-08-24T17:15:00",
                  showtimeCode: 22541
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 22542
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "Joker",
          image: "assets/images/movie/joker.png",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 22558
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 22559
                },
                {
                  hour: "2019-08-23T14:45:00",
                  showtimeCode: 22560
                },
                {
                  hour: "2019-08-23T18:15:00",
                  showtimeCode: 22561
                },
                {
                  hour: "2019-08-23T19:30:00",
                  showtimeCode: 22562
                }
              ]
            }
          ]
        },
        {
          movieName: "Zombieland: Double Tap",
          image: "assets/images/movie/zomebieland.jpeg",
          showtimes: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 22578
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 23335
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 23336
                },
                {
                  hour: "2019-08-22T19:15:00",
                  showtimeCode: 23337
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 23338
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 23339
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 23340
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 23341
                },
                {
                  hour: "2019-08-24T19:15:00",
                  showtimeCode: 23342
                },
                {
                  hour: "2019-08-24T21:30:00",
                  showtimeCode: 23343
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Doctor Strange: Multiverse",
          image: "assets/images/movie/doctorstrange.png",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 23359
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 23360
                },
                {
                  hour: "2019-08-23T14:45:00",
                  showtimeCode: 23361
                },
                {
                  hour: "2019-08-23T20:15:00",
                  showtimeCode: 23362
                },
                {
                  hour: "2019-08-23T21:30:00",
                  showtimeCode: 23363
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Artemis Foul",
          image: "assets/images/movie/artemis.png",
          time: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 23384
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 23385
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 23386
                },
                {
                  hour: "2019-08-22T19:15:00",
                  showtimeCode: 23387
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 23388
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 37153
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 37154
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 37155
                },
                {
                  hour: "2019-08-23T19:15:00",
                  showtimeCode: 37156
                },
                {
                  hour: "2019-08-23T21:30:00",
                  showtimeCode: 37157
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 37158
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 37159
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 37160
                },
                {
                  hour: "2019-08-24T19:15:00",
                  showtimeCode: 37161
                },
                {
                  hour: "2019-08-24T21:30:00",
                  showtimeCode: 37162
                }
              ]
            }
          ]
        }
      ]
    },
    {
      theaterName: "TGV Imperial City",
      theaterCode: "TGV-Imperial-City",
      movieList: [
        {
          movieName: "Fast & Furious Presents: Hobbs & Shaw",
          image: "assets/images/movie/fastandfurious.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T08:00:00",
                  showtimeCode: 16885
                },
                {
                  hour: "2019-08-18T10:30:00",
                  showtimeCode: 16886
                },
                {
                  hour: "2019-08-18T12:45:00",
                  showtimeCode: 16887
                },
                {
                  hour: "2019-08-18T13:15:00",
                  showtimeCode: 16888
                },
                {
                  hour: "2019-08-18T17:30:00",
                  showtimeCode: 16889
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 16890
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 16891
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 16892
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 16893
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 16894
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 16895
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 16896
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 16897
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 16898
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 16899
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "Spider-Man: Far From Home",
          image: "assets/images/movie/spiderman.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 17696
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 17697
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 17698
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 17699
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 17700
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 17701
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 17702
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 17703
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 17704
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 17705
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 17706
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 17707
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 17708
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 17709
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 17710
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 17711
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 17712
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 17713
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 17714
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 17715
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "BoboiBoy Movie 2",
          image: "assets/images/movie/boboiboy.jpeg",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 18522
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 18523
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 18524
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 18525
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 18526
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 18527
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 18528
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 19285
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 19286
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 19287
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 19288
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 19289
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 19290
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 19291
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 19292
                }
              ]
            },
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T08:00:00",
                  showtimeCode: 19293
                },
                {
                  hour: "2019-08-22T10:30:00",
                  showtimeCode: 19294
                },
                {
                  hour: "2019-08-22T12:45:00",
                  showtimeCode: 19295
                },
                {
                  hour: "2019-08-22T13:15:00",
                  showtimeCode: 19296
                },
                {
                  hour: "2019-08-22T17:30:00",
                  showtimeCode: 19297
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 19298
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 19299
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 19300
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 19301
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 19302
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "The Divine Fury",
          image: "assets/images/movie/divinefury.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 19333
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 19334
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 19335
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 19336
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 19337
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 19338
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 20095
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 20096
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 20097
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 20098
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 20099
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 20100
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 20101
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 20102
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 20103
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "The Lion King",
          image: "assets/images/movie/lionking.png",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 20910
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 20911
                },
                {
                  hour: "2019-08-18T14:45:00",
                  showtimeCode: 20912
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 20913
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 209141
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T07:00:00",
                  showtimeCode: 20915
                },
                {
                  hour: "2019-08-20T09:30:00",
                  showtimeCode: 20916
                },
                {
                  hour: "2019-08-20T11:45:00",
                  showtimeCode: 209171
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 209181
                },
                {
                  hour: "2019-08-20T15:30:00",
                  showtimeCode: 209191
                }
              ]
            },
            {
              date: "2019-08-21T00:00:00",
              showtime: [
                {
                  hour: "2019-08-21T08:00:00",
                  showtimeCode: 20920
                },
                {
                  hour: "2019-08-21T10:30:00",
                  showtimeCode: 20921
                },
                {
                  hour: "2019-08-21T12:45:00",
                  showtimeCode: 20922
                },
                {
                  hour: "2019-08-21T13:15:00",
                  showtimeCode: 20923
                },
                {
                  hour: "2019-08-21T17:30:00",
                  showtimeCode: 20924
                }
              ]
            },
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T08:00:00",
                  showtimeCode: 31416
                },
                {
                  hour: "2019-08-22T10:30:00",
                  showtimeCode: 20927
                },
                {
                  hour: "2019-08-22T12:45:00",
                  showtimeCode: 20928
                },
                {
                  hour: "2019-08-22T13:15:00",
                  showtimeCode: 20929
                },
                {
                  hour: "2019-08-22T17:30:00",
                  showtimeCode: 20930
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 20931
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 20932
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 20933
                },
                {
                  hour: "2019-08-24T13:15:00",
                  showtimeCode: 20934
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 20935
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Abigail",
          image: "assets/images/movie/abygail.jpeg",
          showtimes: [
            {
              date: "2019-08-18T00:00:00",
              showtime: [
                {
                  hour: "2019-08-18T07:00:00",
                  showtimeCode: 21732
                },
                {
                  hour: "2019-08-18T09:30:00",
                  showtimeCode: 21733
                },
                {
                  hour: "2019-08-18T15:45:00",
                  showtimeCode: 21734
                },
                {
                  hour: "2019-08-18T17:15:00",
                  showtimeCode: 21735
                },
                {
                  hour: "2019-08-18T19:30:00",
                  showtimeCode: 21736
                }
              ]
            },
            {
              date: "2019-08-19T00:00:00",
              showtime: [
                {
                  hour: "2019-08-19T07:00:00",
                  showtimeCode: 21737
                },
                {
                  hour: "2019-08-19T09:30:00",
                  showtimeCode: 21738
                },
                {
                  hour: "2019-08-19T11:45:00",
                  showtimeCode: 21739
                },
                {
                  hour: "2019-08-19T13:15:00",
                  showtimeCode: 21740
                },
                {
                  hour: "2019-08-19T15:30:00",
                  showtimeCode: 21741
                }
              ]
            },
            {
              date: "2019-08-20T00:00:00",
              showtime: [
                {
                  hour: "2019-08-20T08:00:00",
                  showtimeCode: 21742
                },
                {
                  hour: "2019-08-20T10:30:00",
                  showtimeCode: 21743
                },
                {
                  hour: "2019-08-20T12:45:00",
                  showtimeCode: 21744
                },
                {
                  hour: "2019-08-20T13:15:00",
                  showtimeCode: 21745
                },
                {
                  hour: "2019-08-20T17:30:00",
                  showtimeCode: 21746
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 21747
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 21748
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 21749
                },
                {
                  hour: "2019-08-23T13:15:00",
                  showtimeCode: 21750
                },
                {
                  hour: "2019-08-23T17:30:00",
                  showtimeCode: 21751
                }
              ]
            },
          ]
        }, //clean
        {
          movieName: "Death Whisper",
          image: "assets/images/movie/deathwhisper.jpeg",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 21762
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 21763
                },
                {
                  hour: "2019-08-23T16:45:00",
                  showtimeCode: 21764
                },
                {
                  hour: "2019-08-23T17:16:00",
                  showtimeCode: 21765
                },
                {
                  hour: "2019-08-23T19:30:00",
                  showtimeCode: 21766
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Whethering With You",
          image: "assets/images/movie/withyou.png",
          showtimes: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 22543
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 22544
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 22545
                },
                {
                  hour: "2019-08-22T17:15:00",
                  showtimeCode: 22546
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 22547
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 22548
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 22549
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 22550
                },
                {
                  hour: "2019-08-24T17:15:00",
                  showtimeCode: 22551
                },
                {
                  hour: "2019-08-24T17:30:00",
                  showtimeCode: 22552
                }
              ]
            }
          ]
        }, // clean
        {
          movieName: "Joker",
          image: "assets/images/movie/joker.png",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 22563
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 22564
                },
                {
                  hour: "2019-08-23T14:45:00",
                  showtimeCode: 22565
                },
                {
                  hour: "2019-08-23T18:15:00",
                  showtimeCode: 22566
                },
                {
                  hour: "2019-08-23T19:30:00",
                  showtimeCode: 22567
                }
              ]
            }
          ]
        },
        {
          movieName: "Zombieland: Double Tap",
          image: "assets/images/movie/zomebieland.jpeg",
          showtimes: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 23344
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 23345
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 23346
                },
                {
                  hour: "2019-08-22T19:15:00",
                  showtimeCode: 23347
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 23348
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 23349
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 23350
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 23351
                },
                {
                  hour: "2019-08-24T19:15:00",
                  showtimeCode: 23352
                },
                {
                  hour: "2019-08-24T21:30:00",
                  showtimeCode: 23353
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Doctor Strange: Multiverse",
          image: "assets/images/movie/doctorstrange.png",
          showtimes: [
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T07:00:00",
                  showtimeCode: 23364
                },
                {
                  hour: "2019-08-23T09:30:00",
                  showtimeCode: 23365
                },
                {
                  hour: "2019-08-23T14:45:00",
                  showtimeCode: 23366
                },
                {
                  hour: "2019-08-23T20:15:00",
                  showtimeCode: 23367
                },
                {
                  hour: "2019-08-23T21:30:00",
                  showtimeCode: 23368
                }
              ]
            }
          ]
        }, //clean
        {
          movieName: "Artemis Foul",
          image: "assets/images/movie/artemis.png",
          time: [
            {
              date: "2019-08-22T00:00:00",
              showtime: [
                {
                  hour: "2019-08-22T07:00:00",
                  showtimeCode: 37163
                },
                {
                  hour: "2019-08-22T09:30:00",
                  showtimeCode: 37164
                },
                {
                  hour: "2019-08-22T14:45:00",
                  showtimeCode: 37165
                },
                {
                  hour: "2019-08-22T19:15:00",
                  showtimeCode: 37166
                },
                {
                  hour: "2019-08-22T19:30:00",
                  showtimeCode: 37167
                }
              ]
            },
            {
              date: "2019-08-23T00:00:00",
              showtime: [
                {
                  hour: "2019-08-23T08:00:00",
                  showtimeCode: 37168
                },
                {
                  hour: "2019-08-23T10:30:00",
                  showtimeCode: 37169
                },
                {
                  hour: "2019-08-23T12:45:00",
                  showtimeCode: 37170
                },
                {
                  hour: "2019-08-23T19:15:00",
                  showtimeCode: 37171
                },
                {
                  hour: "2019-08-23T21:30:00",
                  showtimeCode: 37172
                }
              ]
            },
            {
              date: "2019-08-24T00:00:00",
              showtime: [
                {
                  hour: "2019-08-24T08:00:00",
                  showtimeCode: 37173
                },
                {
                  hour: "2019-08-24T10:30:00",
                  showtimeCode: 37174
                },
                {
                  hour: "2019-08-24T12:45:00",
                  showtimeCode: 37175
                },
                {
                  hour: "2019-08-24T19:15:00",
                  showtimeCode: 37176
                },
                {
                  hour: "2019-08-24T21:30:00",
                  showtimeCode: 37177
                }
              ]
            }
          ]
        }
      ]
    }

  ];
  
  constructor() { }

  getMovieList() {
    return this.movieDetail;
  }

  getMovie(nameCode) {
    for(let i = 0; i < this.movieDetail.length; i++) {
      if(this.movieDetail[i].nameCode === nameCode) {
        return this.movieDetail[i]
      }
    }
    return 'no movie match';
  }

  getShowtime() {
    return this.showtimeByTheater;
  }

  
}
