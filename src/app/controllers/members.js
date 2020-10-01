const { date } = require("../../lib/utils");

const Member = require("../models/Member");

module.exports = {
  index(req, res) {
    let { limit, page, filter } = req.query;

    page = page || 1;
    limit = limit || 2;
    let offset = limit * (page - 1);

    const params = {
      page,
      limit,
      offset,
      filter,
      callback(members) {
        const pagination = {
          page,
          total: Math.ceil(members[0].total / limit),
        };
        return res.render("Members/index", { members, pagination, filter });
      },
    };

    Member.paginate(params);
  },
  create(req, res) {
    Member.instructorSelectOptions((options) => {
      return res.render("members/create", { instructorOptions: options });
    });
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (!req.body[key]) return res.send("Please, fill all fields");
    }

    Member.create(req.body, (member) => {
      return res.redirect(`/members/${member.id}`);
    });
  },
  show(req, res) {
    Member.find(req.params.id, (member) => {
      if (!member) return res.send("Member not found!");

      member.birth = date(member.birth).birthDay;
      member.gender = member.gender === "M" ? "Masculino" : "Feminino";

      //Caminho da renderização
      return res.render("members/show", { member });
    });
  },
  edit(req, res) {
    Member.find(req.params.id, (member) => {
      if (!member) return res.send("Member not found!");

      member.birth = date(member.birth).iso;

      Member.instructorSelectOptions((options) => {
        return res.render("members/edit", {
          member,
          instructorOptions: options,
        });
      });
    });
  },
  put(req, res) {
    //Verifica se todos os campos do BODY foram preenchidos
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (!req.body[key]) return res.send("Please, fill all fields");
    }

    Member.update(req.body, () => {
      return res.redirect(`/members/${req.body.id}`);
    });
  },
  delete(req, res) {
    Member.delete(req.body.id, () => {
      return res.redirect("members");
    });
  },
};
