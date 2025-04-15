const validateCarData = (req, res, next) => {
  if (!req.body)
    return res
      .status(400)
      .json({ succes: false, message: "body값 필수입니다" });
  const { id, name } = req.body;

  if (!id || !name)
    return res
      .status(404)
      .json({ succes: false, message: "id와 name 필드는 필수입니다" });

  if (!id.trim() || !name.trim())
    return res.status(404).json({
      succes: false,
      message: "id와 name 필드는 빈 값일 수 없습니다.",
    });

  const idRegex = /^[0-9]{4}[가-힣]$/; // 4자리 숫자와 한글하나
  if (!idRegex.test(id))
    res.status(404).json({ succes: false, message: "id 형식이 안맞음" });
  next();
};
module.exports = { validateCarData };
