export const reCaptcha = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const configurationSetting = await MODEL.ConfigurationSetting.findOne({}).select({ captchaKey: 1 }).lean();
      const serviceAccount = configurationSetting?.captchaKey;
  
      if (serviceAccount?.isActive) {
        const reCaptchaToken = req.headers["x-recaptcha"];
  
        if (!reCaptchaToken) {
          return res.status(400).json({ message: ErrorCode.NO_RECAPTCHA_PROVIDED });
        }
  
        const reqDeviceType = String(req.headers.deviceType);
  
        const secret =
          deviceType.ANDROID === reqDeviceType ? serviceAccount.androidSecretKey : deviceType.IOS === reqDeviceType ? serviceAccount.iosSecretKey : serviceAccount.webSecretKey;
  
        const data = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
          params: {
            secret: secret,
            response: reCaptchaToken
          }
        });
  
        if (!data.data.success) {
          return res.status(400).json({ message: ErrorCode.INVALID_RECAPTCH });
        }
      }
      return next();
    };
  };
  