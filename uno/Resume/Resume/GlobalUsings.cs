global using System.Collections.Immutable;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;
global using Microsoft.Extensions.Localization;
global using Microsoft.Extensions.Logging;
global using Microsoft.Extensions.Options;
global using Resume.Models;
global using Resume.Presentation;
global using Resume.DataContracts;
global using Resume.DataContracts.Serialization;
global using Resume.Services.Caching;
global using Resume.Services.Endpoints;
#if MAUI_EMBEDDING
global using Resume.MauiControls;
#endif
global using ApplicationExecutionState = Windows.ApplicationModel.Activation.ApplicationExecutionState;
