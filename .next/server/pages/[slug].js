"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPosts\": () => (/* binding */ getAllPosts),\n/* harmony export */   \"getDeliveryAreas\": () => (/* binding */ getDeliveryAreas),\n/* harmony export */   \"getPages\": () => (/* binding */ getPages),\n/* harmony export */   \"getPostBySlug\": () => (/* binding */ getPostBySlug),\n/* harmony export */   \"getPostSlugs\": () => (/* binding */ getPostSlugs)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getDeliveryAreas() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(\"content/delivery-areas\");\n    const deliveryAreas = files.map((filename)=>{\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`content/delivery-areas/${filename}`, \"utf8\");\n        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        return {\n            title: data.title,\n            deliveryDay: data.delivery_day,\n            slug: filename.replace(\".md\", \"\")\n        };\n    });\n    return deliveryAreas;\n}\nfunction getPages() {}\nconst postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), \"_posts\");\nfunction getPostSlugs() {\n    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n}\nfunction getPostBySlug(slug, fields = []) {\n    const realSlug = slug.replace(/\\.md$/, \"\");\n    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    const items = {};\n    // Ensure only the minimal needed data is exposed\n    fields.forEach((field)=>{\n        if (field === \"slug\") {\n            items[field] = realSlug;\n        }\n        if (field === \"content\") {\n            items[field] = content;\n        }\n        if (typeof data[field] !== \"undefined\") {\n            items[field] = data[field];\n        }\n    });\n    return items;\n}\nfunction getAllPosts(fields = []) {\n    const slugs = getPostSlugs();\n    const posts = slugs.map((slug)=>getPostBySlug(slug, fields))// sort posts by date in descending order\n    .sort((post1, post2)=>post1.date > post2.date ? -1 : 1);\n    return posts;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ1E7QUFDSztBQUUxQixTQUFTRyxtQkFBbUI7SUFDakMsTUFBTUMsUUFBUUoscURBQWMsQ0FBQztJQUM3QixNQUFNTSxnQkFBZ0JGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQzFDLE1BQU1DLGVBQWVULHNEQUFlLENBQUMsQ0FBQyx1QkFBdUIsRUFBRVEsU0FBUyxDQUFDLEVBQUU7UUFDM0UsTUFBTSxFQUFFRyxLQUFJLEVBQUUsR0FBR1Qsa0RBQU1BLENBQUNPO1FBQ3hCLE9BQU87WUFDTEcsT0FBT0QsS0FBS0MsS0FBSztZQUNqQkMsYUFBYUYsS0FBS0csWUFBWTtZQUM5QkMsTUFBTVAsU0FBU1EsT0FBTyxDQUFDLE9BQU87UUFDaEM7SUFDSjtJQUNBLE9BQU9WO0FBQ1QsQ0FBQztBQUVNLFNBQVNXLFdBQVcsQ0FBQyxDQUFDO0FBRTdCLE1BQU1DLGlCQUFpQmpCLDBDQUFJQSxDQUFDa0IsUUFBUUMsR0FBRyxJQUFJO0FBRXBDLFNBQVNDLGVBQWU7SUFDN0IsT0FBT3JCLHFEQUFjLENBQUNrQjtBQUN4QixDQUFDO0FBRU0sU0FBU0ksY0FBY1AsSUFBWSxFQUFFUSxTQUFtQixFQUFFLEVBQUU7SUFDakUsTUFBTUMsV0FBV1QsS0FBS0MsT0FBTyxDQUFDLFNBQVM7SUFDdkMsTUFBTVMsV0FBV3hCLDBDQUFJQSxDQUFDaUIsZ0JBQWdCLENBQUMsRUFBRU0sU0FBUyxHQUFHLENBQUM7SUFDdEQsTUFBTWYsZUFBZVQsc0RBQWUsQ0FBQ3lCLFVBQVU7SUFDL0MsTUFBTSxFQUFFZCxLQUFJLEVBQUVlLFFBQU8sRUFBRSxHQUFHeEIsa0RBQU1BLENBQUNPO0lBTWpDLE1BQU1rQixRQUFlLENBQUM7SUFFdEIsaURBQWlEO0lBQ2pESixPQUFPSyxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtRQUN4QixJQUFJQSxVQUFVLFFBQVE7WUFDcEJGLEtBQUssQ0FBQ0UsTUFBTSxHQUFHTDtRQUNqQixDQUFDO1FBQ0QsSUFBSUssVUFBVSxXQUFXO1lBQ3ZCRixLQUFLLENBQUNFLE1BQU0sR0FBR0g7UUFDakIsQ0FBQztRQUVELElBQUksT0FBT2YsSUFBSSxDQUFDa0IsTUFBTSxLQUFLLGFBQWE7WUFDdENGLEtBQUssQ0FBQ0UsTUFBTSxHQUFHbEIsSUFBSSxDQUFDa0IsTUFBTTtRQUM1QixDQUFDO0lBQ0g7SUFFQSxPQUFPRjtBQUNULENBQUM7QUFFTSxTQUFTRyxZQUFZUCxTQUFtQixFQUFFLEVBQUU7SUFDakQsTUFBTVEsUUFBUVY7SUFDZCxNQUFNVyxRQUFRRCxNQUNYeEIsR0FBRyxDQUFDLENBQUNRLE9BQVNPLGNBQWNQLE1BQU1RLFFBQ25DLHlDQUF5QztLQUN4Q1UsSUFBSSxDQUFDLENBQUNDLE9BQU9DLFFBQVdELE1BQU1FLElBQUksR0FBR0QsTUFBTUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzNELE9BQU9KO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hcGkudHM/NjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWxpdmVyeUFyZWFzKCkge1xuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKFwiY29udGVudC9kZWxpdmVyeS1hcmVhc1wiKTtcbiAgY29uc3QgZGVsaXZlcnlBcmVhcyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhgY29udGVudC9kZWxpdmVyeS1hcmVhcy8ke2ZpbGVuYW1lfWAsIFwidXRmOFwiKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgZGVsaXZlcnlEYXk6IGRhdGEuZGVsaXZlcnlfZGF5LFxuICAgICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpXG4gICAgICB9O1xuICB9KTtcbiAgcmV0dXJuIGRlbGl2ZXJ5QXJlYXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlcygpIHt9XG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcIl9wb3N0c1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RTbHVncygpIHtcbiAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1Zzogc3RyaW5nLCBmaWVsZHM6IHN0cmluZ1tdID0gW10pIHtcbiAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpO1xuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocG9zdHNEaXJlY3RvcnksIGAke3JlYWxTbHVnfS5tZGApO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsIFwidXRmOFwiKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICB0eXBlIEl0ZW1zID0ge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfTtcblxuICBjb25zdCBpdGVtczogSXRlbXMgPSB7fTtcblxuICAvLyBFbnN1cmUgb25seSB0aGUgbWluaW1hbCBuZWVkZWQgZGF0YSBpcyBleHBvc2VkXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZCA9PT0gXCJzbHVnXCIpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnO1xuICAgIH1cbiAgICBpZiAoZmllbGQgPT09IFwiY29udGVudFwiKSB7XG4gICAgICBpdGVtc1tmaWVsZF0gPSBjb250ZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YVtmaWVsZF0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IGRhdGFbZmllbGRdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGl0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoZmllbGRzOiBzdHJpbmdbXSA9IFtdKSB7XG4gIGNvbnN0IHNsdWdzID0gZ2V0UG9zdFNsdWdzKCk7XG4gIGNvbnN0IHBvc3RzID0gc2x1Z3NcbiAgICAubWFwKChzbHVnKSA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpXG4gICAgLy8gc29ydCBwb3N0cyBieSBkYXRlIGluIGRlc2NlbmRpbmcgb3JkZXJcbiAgICAuc29ydCgocG9zdDEsIHBvc3QyKSA9PiAocG9zdDEuZGF0ZSA+IHBvc3QyLmRhdGUgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIHBvc3RzO1xufVxuIl0sIm5hbWVzIjpbImZzIiwiam9pbiIsIm1hdHRlciIsImdldERlbGl2ZXJ5QXJlYXMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiZGVsaXZlcnlBcmVhcyIsIm1hcCIsImZpbGVuYW1lIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsInRpdGxlIiwiZGVsaXZlcnlEYXkiLCJkZWxpdmVyeV9kYXkiLCJzbHVnIiwicmVwbGFjZSIsImdldFBhZ2VzIiwicG9zdHNEaXJlY3RvcnkiLCJwcm9jZXNzIiwiY3dkIiwiZ2V0UG9zdFNsdWdzIiwiZ2V0UG9zdEJ5U2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwiZnVsbFBhdGgiLCJjb250ZW50IiwiaXRlbXMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwicG9zdHMiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.ts\n");

/***/ }),

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(\"content/pages\");\n    const paths = files.map((filename)=>({\n            params: {\n                slug: filename.replace(\".md\", \"\")\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    const file = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`content/pages/${slug}.md`, \"utf8\");\n    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(file);\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(content);\n    const htmlContent = processedContent.toString();\n    return {\n        props: {\n            title: data.title,\n            content: htmlContent,\n            deliveryAreas: (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.getDeliveryAreas)()\n        }\n    };\n}\nconst Page = ({ title , content  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/macguire.rintoul/dev/bluemoonorganics.com/pages/[slug].tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/macguire.rintoul/dev/bluemoonorganics.com/pages/[slug].tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macguire.rintoul/dev/bluemoonorganics.com/pages/[slug].tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDYTtBQUNEO0FBQ0Q7QUFDZTtBQUV2QyxlQUFlSyxpQkFBaUI7SUFDckMsTUFBTUMsUUFBUU4scURBQWMsQ0FBQztJQUM3QixNQUFNUSxRQUFRRixNQUFNRyxHQUFHLENBQUMsQ0FBQ0MsV0FBYztZQUNyQ0MsUUFBUTtnQkFDTkMsTUFBTUYsU0FBU0csT0FBTyxDQUFDLE9BQU87WUFDaEM7UUFDRjtJQUNBLE9BQU87UUFDTEw7UUFDQU0sVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsQ0FBQztBQUVNLGVBQWVDLGVBQWUsRUFBRUosUUFBUSxFQUFFQyxLQUFJLEVBQUUsR0FBRSxFQUFFO0lBQ3pELE1BQU1JLE9BQU9oQixzREFBZSxDQUFDLENBQUMsY0FBYyxFQUFFWSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sRUFBRU0sS0FBSSxFQUFFQyxRQUFPLEVBQUUsR0FBR2xCLGtEQUFNQSxDQUFDZTtJQUNqQyxNQUFNSSxtQkFBbUIsTUFBTWxCLDhDQUFNQSxHQUFHbUIsR0FBRyxDQUFDbEIsbURBQUlBLEVBQUVtQixPQUFPLENBQUNIO0lBQzFELE1BQU1JLGNBQWNILGlCQUFpQkksUUFBUTtJQUU3QyxPQUFPO1FBQ0xDLE9BQU87WUFDTEMsT0FBT1IsS0FBS1EsS0FBSztZQUNqQlAsU0FBU0k7WUFDVEksZUFBZXZCLDBEQUFnQkE7UUFDakM7SUFDRjtBQUNGLENBQUM7QUFFRCxNQUFNd0IsT0FBTyxDQUFDLEVBQUNGLE1BQUssRUFBRVAsUUFBTyxFQUFFLEdBQUs7SUFDbEMscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBS0w7Ozs7OzswQkFDTiw4REFBQ0c7Z0JBQUlHLHlCQUF5QjtvQkFBRUMsUUFBUWQ7Z0JBQVE7Ozs7Ozs7Ozs7OztBQUd0RDtBQUVBLGlFQUFlUyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvW3NsdWddLnRzeD9jMjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgeyByZW1hcmsgfSBmcm9tIFwicmVtYXJrXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwicmVtYXJrLWh0bWxcIjtcbmltcG9ydCB7IGdldERlbGl2ZXJ5QXJlYXMgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoXCJjb250ZW50L3BhZ2VzXCIpO1xuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxuICAgIH0sXG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xuICBjb25zdCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKGBjb250ZW50L3BhZ2VzLyR7c2x1Z30ubWRgLCBcInV0ZjhcIik7XG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKGZpbGUpO1xuICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKCkudXNlKGh0bWwpLnByb2Nlc3MoY29udGVudCk7XG4gIGNvbnN0IGh0bWxDb250ZW50ID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgY29udGVudDogaHRtbENvbnRlbnQsXG4gICAgICBkZWxpdmVyeUFyZWFzOiBnZXREZWxpdmVyeUFyZWFzKClcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBQYWdlID0gKHt0aXRsZSwgY29udGVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8aDE+eyB0aXRsZSB9PC9oMT5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbImZzIiwibWF0dGVyIiwicmVtYXJrIiwiaHRtbCIsImdldERlbGl2ZXJ5QXJlYXMiLCJnZXRTdGF0aWNQYXRocyIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJwYXRocyIsIm1hcCIsImZpbGVuYW1lIiwicGFyYW1zIiwic2x1ZyIsInJlcGxhY2UiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiZmlsZSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJjb250ZW50IiwicHJvY2Vzc2VkQ29udGVudCIsInVzZSIsInByb2Nlc3MiLCJodG1sQ29udGVudCIsInRvU3RyaW5nIiwicHJvcHMiLCJ0aXRsZSIsImRlbGl2ZXJ5QXJlYXMiLCJQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].tsx"));
module.exports = __webpack_exports__;

})();