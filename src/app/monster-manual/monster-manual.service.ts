import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import * as _ from 'lodash';

import { Combat } from '../classes/Combat';
import { MonsterManualResponse } from '../responses/MonsterManualResponse';
import { MonsterResponse } from '../responses/MonsterResponse';
import { AbilityScores } from '../classes/AbilityScores';
import { Skills } from '../classes/Skills';
import { CRSelectItem } from '../classes/CRSelectItem';
import { Monster } from '../classes/Monster';
import { URL } from '../URL';

@Injectable()
export class MonsterManualService {
  private readonly monsterManualEndpoint: string = URL.api + "/monster-manual/get-monsters";
  private readonly monsterManualSWEndpoint: string = URL.api + "/monster-manual/get-monsters-sw";
  private readonly monsterEndpoint: string = URL.api + "/monster-manual/get-monster/";

  public hit_die = {
    tiny: { die: 4, half: 2.5 },
    small: { die: 6, half: 3.5 },
    medium: { die: 8, half: 4.5 },
    large: { die: 10, half: 5.5 },
    huge: { die: 12, half: 6.5 },
    gargantuan: { die: 20, half: 10.5 }
  }

  public crs: CRSelectItem[] = Combat.ChallengeRatings;

  constructor(private http: Http) {}
  public GetMonsters(): Promise <MonsterManualResponse> {
    return this
      .http
      .get(this.monsterManualEndpoint)
      .map(value => {
        var response = value.json() as MonsterManualResponse;
        response.Response.forEach((m: Monster): void => {
          m.ability_scores = AbilityScores.ParseScores(m.ability_scores);
          m.saving_throws = AbilityScores.ParseScores(m.saving_throws);
          m.skills = Skills.ParseSkills(m.skills);
        });
        if (!response) {
          throw value.toString();
        } else if (response.Error) {
          throw response.Error;
        }
        return response;
      })
      .toPromise();
  }

  public GetStarWarsMonsters(): Promise <MonsterManualResponse> {
    return this
      .http
      .get(this.monsterManualSWEndpoint)
      .map(value => {
        var response = value.json() as MonsterManualResponse;
        response.Response.forEach((m: Monster): void => {
          m.ability_scores = AbilityScores.ParseScores(m.ability_scores);
          m.saving_throws = AbilityScores.ParseScores(m.saving_throws);
          m.skills = Skills.ParseSkills(m.skills);
        });
        if (!response) {
          throw value.toString();
        } else if (response.Error) {
          throw response.Error;
        }
        return response;
      })
      .toPromise();
  }

  public GetMonster(name: string): Promise <MonsterResponse> {
    return this
      .http
      .get(this.monsterEndpoint + name)
      .map(value => {
        var response = value.json() as MonsterResponse;
        if (!response) {
          throw value.toString();
        } else if (response.Error) {
          throw response.Error;
        }
        return response;
      })
      .toPromise();
  }

  public GetHP(monster: Monster): number {
    return _.ceil((this.hit_die[monster.size].half + AbilityScores.GetScore(monster.ability_scores.constitution)) * monster.hit_points);
  }

  public RollHP(monster: Monster): number {
    var hp: number = 0;
    var hit: number = this.hit_die[monster.size].die;
    var con: number = AbilityScores.GetScore(monster.ability_scores.constitution);
    hp += hit + con;
    for(var i = 1; i < monster.hit_points; i++) {
      hp += _.random(1, hit) + con;
    }
    return hp;
  }

  public GetChallenge(cr: number): CRSelectItem {
    var val = _.findIndex(this.crs, function(challenge) { 
      return challenge.value == cr; 
    });
    return this.crs[val];
  }
}
