figma.showUI(__html__);

figma.ui.resize(400, 300);

figma.ui.onmessage = (pluginMessage) => {
	//check if user select design element
	if (
		figma.currentPage.selection.length == 0 ||
		figma.currentPage.selection == undefined
	) {
		figma.closePlugin();
	} else {
		//get seletected item and apply radius
		const selected = figma.currentPage.selection[0] as ComponentNode;
		if (
			selected &&
			(selected.type == 'COMPONENT' ||
				selected.type == 'COMPONENT_SET' ||
				selected.type == 'FRAME' ||
				selected.type == 'INSTANCE' ||
				selected.type == 'RECTANGLE')
		) {
			selected.topLeftRadius = 76;
		} else {
			figma.closePlugin();
		}
	}

	// figma.closePlugin();
};
