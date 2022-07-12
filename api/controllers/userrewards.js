"use strict";

const userRewards = require("../models").userrewards;
const modelReponse = require("../services/utils/responses");

module.exports = {
  /*
    Validate if time are 1 minute after new rewards points
  */
  validateOrUpdatePoints(req, res) {
    try {
      var ip =
        req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
      let userReward = userRewards.findOne({
        ip: ip,
      });
      if (userReward) {
        let lastRewards = new Date(userReward.last_rewards);
        let now = new Date();
        let timeDiff = Math.abs(now.getTime() - lastRewards.getTime());
        let diffMinutes = Math.ceil(timeDiff / (1000 * 60));
        if (diffMinutes > 1) {
          userReward = userRewards.update(
            {
              last_rewards: now,
              points: userReward.points + 1,
            },
            {
              where: {
                ip: ip,
              },
            }
          );
        }
      } else {
        userReward = userRewards.create({
          ip: ip,
          last_rewards: new Date(),
          points: 1,
        });
      }
      return modelReponse.sucess_Ok(res)("", {
        userReward: userReward,
      });
    } catch (error) {
      return modelReponse.sucess_internal_server(res)(error.message);
    }
  },
};
