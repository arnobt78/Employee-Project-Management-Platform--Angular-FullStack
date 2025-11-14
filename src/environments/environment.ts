const runtimeEnv =
  (
    globalThis as unknown as {
      process?: { env?: Record<string, string | undefined> };
    }
  )?.process?.env ?? {};

const fromEnv = (key: string, fallback: string) => {
  const value = runtimeEnv[key];
  return typeof value === 'string' && value.trim().length > 0
    ? value
    : fallback;
};

export const environment = {
  production: false,
  demoLogin: {
    username: 'admin',
    password: '112233',
  },
  api: {
    baseUrl: fromEnv('NG_APP_API_BASE_URL', '/api/employee-management/'),
    aiAssistantUrl: fromEnv('NG_APP_AI_ASSISTANT_URL', ''),
    contentfulProxyUrl: fromEnv('NG_APP_CONTENTFUL_PROXY_URL', ''),
  },
  database: {
    mongodbUri: fromEnv('NG_APP_MONGODB_URI', ''),
    prismaDatasourceUrl: fromEnv('NG_APP_PRISMA_URL', ''),
  },
  integrations: {
    contentful: {
      spaceId: fromEnv('NG_APP_CONTENTFUL_SPACE_ID', ''),
      environment: fromEnv('NG_APP_CONTENTFUL_ENVIRONMENT', 'master'),
      deliveryToken: fromEnv('NG_APP_CONTENTFUL_DELIVERY_TOKEN', ''),
    },
    ai: {
      geminiApiKey: fromEnv('NG_APP_GEMINI_API_KEY', ''),
      groqApiKey: fromEnv('NG_APP_GROQ_API_KEY', ''),
      openRouterApiKey: fromEnv('NG_APP_OPENROUTER_API_KEY', ''),
    },
    email: {
      resendApiKey: fromEnv('NG_APP_RESEND_API_KEY', ''),
      smtpHost: fromEnv('NG_APP_SMTP_HOST', ''),
      smtpUser: fromEnv('NG_APP_SMTP_USER', ''),
    },
    storage: {
      cloudinaryUploadPreset: fromEnv('NG_APP_CLOUDINARY_UPLOAD_PRESET', ''),
      imageKitPublicKey: fromEnv('NG_APP_IMAGEKIT_PUBLIC_KEY', ''),
    },
  },
  featureToggles: {
    readinessChecklistV2:
      fromEnv('NG_APP_FEATURE_READINESS_V2', 'true') === 'true',
    aiSummaryGenerator:
      fromEnv('NG_APP_FEATURE_AI_SUMMARY', 'false') === 'true',
    workflowTimeline:
      fromEnv('NG_APP_FEATURE_WORKFLOW_TIMELINE', 'false') === 'true',
  },
};
